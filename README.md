# Gallery
## CRUD API Data Structure
***

#### Create product
* POST `/products`

**Success Status Code :** ```200```
**Request Body :** Expects JSON with following key.

```JavaScript
{
    _id: 'Number',
    name: 'String',
    images: [
        imageUrl: 'String url',
    ],
}
```
---
#### Read product
* GET `/products/:pid`

**Success Status Code :** ```200```
**Response Body :** Expects JSON with following key.

```JavaScript
{
    _id: 'Number',
    name: 'String',
    images: [
        imageUrl: 'String url',
    ],
}
```
---
#### Update product
* PUT `/products/:pid`

**Success Status Code :** ```200```
**Request Body :** Expects JSON with following key.

```JavaScript
{
    _id: 'Number',
    name: 'String',
    images: [
        imageUrl: 'String url',
    ],
}
```
---
#### Delete product
* DELETE `/products/:pid`

**Success Status Code :** ```200```
**Request Body :** Expects JSON with following key.

