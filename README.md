# Pharmacy Orders Management Gadget

## Overview
The Pharmacy Orders Api is designed to manage pharmacy orders and allowing user to add, view and delete orders. This API use mongoDB database to store the orders data for future works.

## Functionalities
- Add new pharmacy order.
- View all pharmacy orders.
- Delete existing pharmacy order.

## Technologies Used
- Node.js
- Express.js
- MongoDB


## API Endpoints
**1.** **Add Order** :
  - **Endpoint** : `api/v1/orders/addorder`
  - **Description** : Frontend client send the order data (json) within request body. Then server insert this order as a document in mongodb.
  - **Request Body** :
  ```json
    {
    "patientName": "Ramesh Sharma",
    "doctorName": "Dr. Sneha Verma",
    "medicines": [
      { "medicineName": "Paracetamol", "quantity": 10, "rate": 20 },
      { "medicineName": "Cough Syrup", "quantity": 1, "rate": 150 }
    ]
    }
   ```
  - **Request Body** :
    - **201 Created** : Returns The created order object.
    -  **400 Bad Request** : Return a response with message **"All Fields Required"**.
    -  **500 Internal Server Error** : If there is an issue to creating the order document.
      
**2.** **View Orders** :
  - **Endpoint** : `api/v1/orders/view-orderlist`
  - **Description** : Retrieves pharmacy orders according the pagination strategies from the database
  - **Request Body** :
  ```json
    {
    "page": 1,
    "limitValue": 5,
    }
   ```
  - **Request Body** :
    - **200 OK** : Returns an array of order documents.
    -  **500 Internal Server Error** : If there is an issue to retrieving orders.


 **3.** **Delete Order** :
  - **Endpoint** : `api/v1/orders/deleteorder/:id`
  - **Description** : Deletes a pharmacy order by ID from database.
  - **Request Body** : No request body needed.
  - **Request Body** :
    - **200 OK** : Successfully deleted particular order from database.
    -  **400 Bad Request** : Return a response with message **"Not Valid ID"**.
    -  **404 Not Found** : The order doesn't exist.
    -  **500 Internal Server Error** : If there is an issue to deleting the order document.

## Installation
 - **1.** Clone the git repository :
  ``` node
      git clone <https://github.com/RajeshKumawat0101/OMG.git>
      cd <OMG>
  ```
 - **2.** Install the dependencies :
  ``` node
    npm install
  ```
 - **3.** Create .env file for required environmental variables.
 - **4.** Start the server :
  ``` node
      npm run start
  ```

## Testing the API.
- **1.** Add Order API :
  [Postman Link](https://winter-astronaut-184894.postman.co/workspace/New-Team-Workspace~f58a3202-450c-4ac5-bd6c-e06eae96c5b2/request/32478742-9fe614f4-89e2-4249-9a1f-a7df4bb0fb95?action=share&source=copy-link&creator=32478742&ctx=documentation)

  ![addOrder](https://github.com/user-attachments/assets/7132ff4b-739d-4771-b79f-673ae84a9511)


 - **2.** View Orders API :
   [Postman Link](https://winter-astronaut-184894.postman.co/workspace/New-Team-Workspace~f58a3202-450c-4ac5-bd6c-e06eae96c5b2/request/32478742-e21a810b-d15a-461c-a85e-de0c4f02ca78?action=share&source=copy-link&creator=32478742&ctx=documentation)
  
   ![viewOrder](https://github.com/user-attachments/assets/04bd2b7e-143b-47b5-ada7-fabee76ba401)


  - **3.** Delete Order API :
    [Postman Link](https://winter-astronaut-184894.postman.co/workspace/New-Team-Workspace~f58a3202-450c-4ac5-bd6c-e06eae96c5b2/request/32478742-c7ba6024-4584-411a-91a9-9334eab37a74?action=share&source=copy-link&creator=32478742&ctx=documentation)

    ![deleteOrder](https://github.com/user-attachments/assets/b207b3d8-adae-4110-87bf-245e1b4ce50c)


## Conclusion :
This Pharmacy Orders API provides a simple and effective way to manage phamacy orders using MongoDB database. It
can be easily extended to include more features such as updating orders and user authentication.
