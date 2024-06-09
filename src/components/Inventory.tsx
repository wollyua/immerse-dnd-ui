import { useState, useEffect } from "react";
import "./Inventory.css";
import {
  InventoryDto,
  addInventoryItem,
  getInventory,
} from "../api/ApiService";

export interface InventoryProps {
  ItemId: string;
  ItemName: string;
  ItemDescription: string;
}

export default function Inventory({ characterId }: { characterId: string }) {
  const [items, setItems] = useState<InventoryDto[]>([]);

  useEffect(() => {
    getInventory(characterId)
      .then((response) => setItems(response))
      .catch((error) => console.error(error));
  }, [characterId]);

  return (
    <div className="inventory-container">
      <div className="list-container">
        {true && <AddItem characterId={characterId} />}
        {items.length === 0 ? (
          <div className="empty-inventory">No items in inventory</div>
        ) : (
          items.map((item, index) => (
            <InventoryItem
              key={index}
              ItemId={item.itemId}
              ItemName={item.itemName}
              ItemDescription={item.itemDescription}
            />
          ))
        )}
      </div>
      <div className="inventory-header">INVENTORY</div>
    </div>
  );
}

function InventoryItem(props: InventoryProps) {
  const id = props.ItemId;
  return (
    <div className="item-container">
      <div className="item-name">{props.ItemName}</div>
      <div className="item-description">
        {props.ItemDescription == null || props.ItemDescription.length === 0
          ? "-"
          : props.ItemDescription}
      </div>
    </div>
  );
}

export function AddItem({ characterId }: { characterId: string }) {
  const addItem = () => {
    const itemName = document.querySelector(
      ".item-name input"
    ) as HTMLInputElement;
    const itemDescription = document.querySelector(
      ".item-description input"
    ) as HTMLInputElement;

    if (itemName.value.length === 0) {
      alert("Item name cannot be empty");
      return;
    }
    let item: InventoryDto = {} as InventoryDto;
    item.itemName = itemName.value;
    item.itemDescription = itemDescription.value;
    item.characterId = characterId;
    console.log("Adding item:", item);

    addInventoryItem(item);
    return;
  };

  return (
    <div className="add-item-container">
      <div className="item-name">
        <input type="text" maxLength={32} />
      </div>
      <div className="item-description">
        <input type="text" maxLength={64} />
      </div>
      <button className="add-item-button" onClick={addItem}>
        Add
      </button>
    </div>
  );
}
