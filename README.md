**Khairun Nisa Cipta Hapsari | GG3FSUP0120**

# Tokopedia Play Clone

This project is a clone form of Tokopedia Play but the videos displayed are from YouTube embeds. Before running the application Users are required to log in via the email they registered at registration. After logging in the user can see the home view of the application. Users can also watch the videos they choose, view their products and write comments on the videos they choose.

## Deployment

- BE Base URL : https://final-project-backend-production-be6f.up.railway.app/
- FE Base URL : https://delicate-dolphin-6388bc.netlify.app/

## Table of Content

1. [Database Structure](#database-structure)
2. [API Structure](#api-structure)
3. [API Requests and Responses](#api-requests-and-responses)
4. [How to Run in Local](#how-to-run-in-local)

## Database Structure

![Deskripsi Gambar](./database_structure.png)

## API Structure

- User
  - `POST /v1/api/auth/register` : create User
  - `GET /v1/api/auth/login` : get data User
- Video
  - `POST /v1/api/videos` : create video
  - `GET /v1/api/videos` : get list videos
  - `GET /v1/api/videos/:id` : get a video by id
  - `GET /v1/api/videos/:id/products` : get a video by id and all products
  - `GET /v1/api/videos/:id/comments` : get a video by id and all comments
- Product
  - `POST /v1/api/products` : create product
  - `GET /v1/api/products` : get list products
  - `GET /v1/api/products/:id` : get a product by id
- Comment
  - `POST /v1/api/comments` : create comment
  - `GET /v1/api/comments` : get list comments
  - `GET /v1/api/comments/:id` : get a comment by id

## API Requests and Responses

### Auth User

1.  Post User Register

    - URL : localhost:5000/v1/api/auth/register
    - Method : POST
    - Request body
      ```json
      {
        "username": "khairun nisa",
        "email": "example@gmail.com",
        "password": "1234"
      }
      ```
    - Response
      ```json
      {
        "code": 201,
        "message": "success register",
        "data": {
          "username": "khairun nisa",
          "email": "example@gmail.com",
          "password": "$2b$10$t4M0KL20V3TtWIf9BcuQrOG0NYMJV.Y9rw/NXK54CTx.tIuwUd1MG",
          "_id": "64df8a909ca0096bc1545a6f"
        }
      }
      ```

2.  Post User Login

    - URL : localhost:5000/v1/api/auth/login
    - Method : POST
    - Request body
      ```json
      {
        "email": "example@gmail.com",
        "password": "1234"
      }
      ```
    - Response :
      ```json
      {
        "code": 200,
        "message": "success login",
        "data": {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZ21haWwuY29tIiwiaWF0IjoxNjkyMzcxNzQ1fQ.3qw64yXvWgPIHIv1iJsgmqAYKPqqWuoGRoEgVbK-TiQ",
          "user": {
            "_id": "64df8a909ca0096bc1545a6f",
            "username": "khairun nisa",
            "email": "example@gmail.com",
            "password": "$2b$10$t4M0KL20V3TtWIf9BcuQrOG0NYMJV.Y9rw/NXK54CTx.tIuwUd1MG"
          }
        }
      }
      ```

### Video

1.  Post video

    - URL : localhost:5000/v1/api/videos
    - Method : POST
    - Header : `Authorization : <token>`
    - Request body
      ```json
      {
        "title": "Printer",
        "video_url": "FR7-7lGGAyA"
      }
      ```
    - Response :
      ```json
      {
        "code": 201,
        "message": "success create video",
        "data": {
          "title": "Printer",
          "video_url": "FR7-7lGGAyA",
          "_id": "64df84490b7e7198fb83ab3e",
          "createdAt": "2023-08-18T14:46:33.251Z",
          "updatedAt": "2023-08-18T14:46:33.251Z"
        }
      }
      ```

2.  Get all video
    - URL : localhost:5000/v1/api/videos
    - Method : GET
    - Header : `Authorization : <token>`
    - Response :
      ```json
      {
        "code": 200,
        "message": "success get all video",
        "data": [
          {
            "_id": "64d8a9aa76c9c82730cb394d",
            "title": "foods",
            "video_url": "VsDtnTvgDB0",
            "createdAt": "2023-08-13T10:00:10.456Z",
            "updatedAt": "2023-08-13T10:00:10.456Z"
          },
          {
            "_id": "64d8aa4576c9c82730cb394f",
            "title": "burger king",
            "video_url": "M9j7uFba5AM",
            "createdAt": "2023-08-13T10:02:45.434Z",
            "updatedAt": "2023-08-13T10:02:45.434Z"
          }
        ]
      }
      ```
3.  Get video by id
    - URL : localhost:5000/v1/api/videos/64d8aa4576c9c82730cb394f
    - Method : GET
    - Header : `Authorization : <token>`
    - Response :
      ```json
      {
        "code": 200,
        "message": "success get video by id",
        "data": [
          {
            "_id": "64d8aa4576c9c82730cb394f",
            "title": "burger king",
            "video_url": "M9j7uFba5AM",
            "createdAt": "2023-08-13T10:02:45.434Z",
            "updatedAt": "2023-08-13T10:02:45.434Z"
          }
        ]
      }
      ```
4.  Get video by id with product

    - URL : localhost:5000/v1/api/videos/64d8aa4576c9c82730cb394f/products
    - Method : GET
    - Header : `Authorization : <token>`
    - Response :
      ```json
      {
        "code": 200,
        "message": "success get video with products",
        "data": {
          "_id": "64d8aa4576c9c82730cb394f",
          "video_url": "M9j7uFba5AM",
          "products": [
            {
              "_id": "64d8ac473027a6aae4991d5d",
              "title": "burger",
              "price": 150000,
              "video_id": "64d8aa4576c9c82730cb394f",
              "link_product": "https://img.kurio.network/QxKbt870DH97dKwzrHdsVy2S3Lw=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/21/09/01/66145feb-79af-4e77-ac79-32af2f70faee.jpe"
            },
            {
              "_id": "64da349714897373c1356edf",
              "title": "burger",
              "price": 150000,
              "video_id": "64d8aa4576c9c82730cb394f",
              "link_product": "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?w=2000"
            }
          ],
          "createdAt": "2023-08-13T10:02:45.434Z",
          "updatedAt": "2023-08-13T10:02:45.434Z"
        }
      }
      ```

5.  Get video by id with comment
    - URL : localhost:5000/v1/api/videos/64d8aa4576c9c82730cb394f/comments
    - Method : GET
    - Header : `Authorization : <token>`
    - Response :
      ```json
      {
        "code": 200,
        "message": "success get video with comments",
        "data": {
          "_id": "64d8aa4576c9c82730cb394f",
          "video_url": "M9j7uFba5AM",
          "comments": [
            {
              "_id": "64dacb1d88877381e078b2dc",
              "video_id": "64d8aa4576c9c82730cb394f",
              "username": "nisacipta",
              "comment": "contoh komentar",
              "createdAt": "2023-08-15T00:47:25.025Z",
              "updatedAt": "2023-08-15T00:47:25.025Z"
            },
            {
              "_id": "64dacb2d88877381e078b2df",
              "video_id": "64d8aa4576c9c82730cb394f",
              "username": "nisacipta",
              "comment": "contoh komentar lainnya",
              "createdAt": "2023-08-15T00:47:41.087Z",
              "updatedAt": "2023-08-15T00:47:41.087Z"
            }
          ],
          "createdAt": "2023-08-13T10:02:45.434Z",
          "updatedAt": "2023-08-13T10:02:45.434Z"
        }
      }
      ```

### Product

1.  Post product

    - URL : localhost:5000/v1/api/products
    - Method : POST
    - Header : `Authorization : <token>`
    - Request :
      ```json
      {
        "title": "burger",
        "video_id": "64d8aa4576c9c82730cb394f",
        "link_product": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9Sqor8aQf6Jk240izUIkz-NQmZZXfFQJXg&usqp=CAU",
        "price": 50000
      }
      ```
    - Response :
      ```json
      {
        "code": 201,
        "message": "success create product",
        "data": {
          "title": "burger",
          "price": 50000,
          "video_id": "64d8aa4576c9c82730cb394f",
          "link_product": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9Sqor8aQf6Jk240izUIkz-NQmZZXfFQJXg&usqp=CAU",
          "_id": "64df9a43fee5f1de6ca48b1e"
        }
      }
      ```

2.  Get all product
    - URL : localhost:5000/v1/api/products
    - Method : GET
    - Header : `Authorization : <token>`
    - Response :
      ```json
      {
        "code": 200,
        "message": "success get all products",
        "data": [
          {
            "_id": "64d8ac473027a6aae4991d5d",
            "title": "burger",
            "price": 150000,
            "video_id": "64d8aa4576c9c82730cb394f",
            "link_product": "https://img.kurio.network/QxKbt870DH97dKwzrHdsVy2S3Lw=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/21/09/01/66145feb-79af-4e77-ac79-32af2f70faee.jpe"
          },
          {
            "_id": "64df9bcefee5f1de6ca48b30",
            "title": "Boba",
            "price": 20000,
            "video_id": "64d9e419bc2faabed81ba1ee",
            "link_product": "https://simplyhomecooked.com/wp-content/uploads/2023/04/Brown-sugar-boba-6.jpgU"
          }
        ]
      }
      ```
3.  Get product by id
    - URL : localhost:5000/v1/api/products/64df9bcefee5f1de6ca48b30
    - Method : GET
    - Header : `Authorization : <token>`
    - Response :
      ```json
      {
        "code": 200,
        "message": "success get product by id",
        "data": {
          "_id": "64df9bcefee5f1de6ca48b30",
          "title": "Boba",
          "price": 20000,
          "video_id": "64d9e419bc2faabed81ba1ee",
          "link_product": "https://simplyhomecooked.com/wp-content/uploads/2023/04/Brown-sugar-boba-6.jpgU"
        }
      }
      ```

### Comment

1.  Post comment
    - URL : localhost:5000/v1/api/comments
    - Method : POST
    - Header : `Authorization : <token>`
    - Request :
      ```json
      {
        "username": "nisacipta",
        "video_id": "64d8aa4576c9c82730cb394f",
        "comment": "contoh komentar lainnya"
      }
      ```
    - Response :
      ```json
      {
        "code": 201,
        "message": "success create comment",
        "data": {
          "video_id": "64d8aa4576c9c82730cb394f",
          "username": "nisacipta",
          "comment": "contoh komentar lainnya",
          "_id": "64df9ef0fee5f1de6ca48b4e",
          "createdAt": "2023-08-18T16:40:16.771Z",
          "updatedAt": "2023-08-18T16:40:16.771Z"
        }
      }
      ```
2.  Get all comment

    - URL : localhost:5000/v1/api/comments
    - Method : GET
    - Header : `Authorization : <token>`
    - Response :
      ```json
      {
        "code": 200,
        "message": "success get all comment",
        "data": [
          {
            "_id": "64d0bfa8b38071209549550d",
            "video_id": "64c32a01a9bdaecb7bd0fe08",
            "username": "human",
            "comment": "productnya bagus bang",
            "createdAt": "2023-08-07T09:55:52.703Z",
            "updatedAt": "2023-08-07T09:55:52.703Z"
          },
          {
            "_id": "64df9ef0fee5f1de6ca48b4e",
            "video_id": "64d8aa4576c9c82730cb394f",
            "username": "nisacipta",
            "comment": "contoh komentar lainnya",
            "createdAt": "2023-08-18T16:40:16.771Z",
            "updatedAt": "2023-08-18T16:40:16.771Z"
          }
        ]
      }
      ```

3.  Get comment by id
    - URL : localhost:5000/v1/api/comments/64df9ef0fee5f1de6ca48b4e
    - Method : GET
    - Header : `Authorization : <token>`
    - Response :
      ```json
      {
        "code": 200,
        "message": "success get comment by id",
        "data": {
          "_id": "64df9ef0fee5f1de6ca48b4e",
          "video_id": "64d8aa4576c9c82730cb394f",
          "username": "nisacipta",
          "comment": "contoh komentar lainnya",
          "createdAt": "2023-08-18T16:40:16.771Z",
          "updatedAt": "2023-08-18T16:40:16.771Z"
        }
      }
      ```

## How to Run in Local

1. Clone the repository to your local machine
   ```bash
   git clone https://github.com/NisaCipta/final-project-frontend.git
   ```
2. Navigate to the project directory
   ```bash
   cd final-project-frontend
   ```
3. Install the dependencies for the frontend
   ```bash
   npm i
   ```
4. Start the frontend development server on port 3000
   ```bash
   npm run start
   ```
5. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/NisaCipta/final-project-backend.git
   ```
6. Open a new terminal window and navigate to the backend directory
   ```bash
   cd final-project-backend
   ```
7. Install the dependencies for the backend
   ```bash
   npm i
   ```
8. Start the backend server on port 5000
   ```bash
   npm run start
   ```
9. You're all set! You can now access the frontend at [http://localhost:3000](http://localhost:3000) and interact with the backend APIs at [http://localhost:5000](http://localhost:5000).
