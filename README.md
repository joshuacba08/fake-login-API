# fake-login-API

Fake Login API es una pequeña API la cual recibe una solicitud **POST** con usuario y contraseña.


* **POST**: *https://fake-login-api-production.up.railway.app/api/auth/login*

  ```json
  {
      "email":"juan.cruz@gmail.com",
      "password":"Abc123"
  }
  ```

  * Response:
    ```json
    {
        "ok": true,
        "user": {
            "email": "juan.cruz@gmail.com",
            "password": "Abc123",
            "avatar": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
            "fname": "juan",
            "lname": "cruz",
            "id": "2"
        }
    }
    ```



* Con credenciales incorrectas, la respuesta es la siguiente:
  ```json
  {
      "ok": false,
      "error": "credenciales incorrectas"
  }
  ```
