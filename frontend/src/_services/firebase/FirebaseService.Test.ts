import { FirebaseDatabaseService } from "./FirebaseDatabaseService";

export const FirebaseDatabaseServiceTest: any = {

  test: () => {

    const path: string = "test-path";
  
    console.log("PATH", path);
  
    // Add an item to the database
    FirebaseDatabaseService.addItem(path, {
      name: "Item 1",
      description: "This is item 1",
    })
      .then(() => {
        console.log("Item added successfully");
      })
      .catch((error: any) => {
        console.error("Error adding item:", error);
      });
  
    // Get all items from the database
    FirebaseDatabaseService.getItems(path)
      .then((snapshot: any) => {
        const items = snapshot.val();
        console.log("Items:", items);
      })
      .catch((error: any) => {
        console.error("Error getting items:", error);
      });
  
    // Get a specific item from the database
    FirebaseDatabaseService.getItem(path, "-MhK3JvJj8nZjJ1fJ8vO")
      .then((snapshot: any) => {
        const item = snapshot.val();
        console.log("Item:", item);
      })
      .catch((error: any) => {
        console.error("Error getting item:", error);
      });
  
    // Update an item in the database
    FirebaseDatabaseService.updateItem(path, "-MhK3JvJj8nZjJ1fJ8vO", {
      description: "This is the updated description",
    })
      .then(() => {
        console.log("Item updated successfully");
      })
      .catch((error: any) => {
        console.error("Error updating item:", error);
      });
  
    // Remove an item from the database
    FirebaseDatabaseService.removeItem(path, "-MhK3JvJj8nZjJ1fJ8vO")
      .then(() => {
        console.log("Item removed successfully");
      })
      .catch((error: any) => {
        console.error("Error removing item:", error);
      });
  
    // Delete all items from the database
    FirebaseDatabaseService.deletePath(path)
      .then(() => {
        console.log("Items deleted successfully");
      })
      .catch((error: any) => {
        console.error("Error deleting items:", error);
      });
  
    // Disconnect from Firebase database
    FirebaseDatabaseService.disconnectDatabase();

  }
  
}