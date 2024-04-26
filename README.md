## 1. Introducere

Această documentație oferă o prezentare a proiectului pentru materia Cloud Computing care permite utilizatorilor să acceseze și să adauge restaurante printr-un API RESTful. Proiectul este găzduit pe platforma Vercel și utilizează serviciul de bază de date MongoDB Atlas pentru stocarea datelor.

[Link aplicație](https://project-cloud-computing-jcom9f4cx-balercaoctavians-projects.vercel.app) .


## 2. Descriere problemă

În cadrul industriei, este adesea necesar să se administreze și să se acceseze informații despre restaurante, cum ar fi numele, adresa, tipul de mâncare, etc. Această aplicație vine în ajutorul utilizatorilor, oferindu-le posibilitatea de a căuta sau adăuga informații despre restaurante într-un mod eficient și organizat.

## 3. Descriere API

### Endpoints Disponibile:
- GET /api/list: Returnează o listă de restaurante din baza de date.
- POST /api/list: Adaugă un nou restaurant în baza de date.

### Parametrii:

GET /api/list:
- Niciun parametru necesar.

POST /api/list:
- Name (string, obligatoriu): Numele restaurantului.
- Address (string, obligatoriu): Adresa restaurantului.
- Street (string, opțional): Numele străzii restaurantului.
- Zipcode (string, opțional): Codul poștal al zonei restaurantului.
- Cuisine (string, obligatoriu): Tipul de mâncare oferit de restaurant.

### Raspunsuri:

GET /api/list:
- 200 OK: Returnează o listă de restaurante în format JSON.
- 500 Internal Server Error: În caz de eroare la accesarea datelor.

POST /api/list:
- 201 Created: Indică că restaurantul a fost adăugat cu succes în baza de date.
- 400 Bad Request: Indică o cerere invalidă sau lipsa unor parametri necesari.
- 500 Internal Server Error: În caz de eroare la adăugarea datelor în baza de date.


## 4. Flux de date

### Exemple de Request / Response:

### GET /api/list:

### Request:
GET /api/list 

### Response (200 OK):
[
    {
        "_id": "6123456789abcdef12345678",
        "name": "Restaurant1",
        "address": "Address1",
        "street": "Street1",
        "zipcode": "12345",
        "cuisine": "Cuisine1"
    },
    {
        "_id": "7123456789abcdef12345679",
        "name": "Restaurant2",
        "address": "Address2",
        "street": "Street2",
        
        "zipcode": "54321",
        "cuisine": "Cuisine2"
    }
]

### POST /api/list:

### Request:
POST /api/list
Content-Type: application/json

{
    "name": "New Restaurant",
    "address": "New Address",
    "street": "New Street",
    "zipcode": "67890",
    "cuisine": "New Cuisine"
}

### Response (201 Created):


New restaurant added: {success: true, data: {...}} {
data:
    acknowledged: true
    insertedId: "662b69ea06fff0e7bf397071"
    ► [[Prototype]]: Object
success: true
► [[Prototype]]: Object
}