# Tumbu Proxy Server

## Avaiable Endpoints

- GET ALL products
- GET SINGLE products

- GET IMAGE images

### BASE URL

```bash
https://tumbu-proxy.vercel.app/api
```

## Usage

#### To Get All products

```bash
{{BASE URL}}/products?organization_id=123&reverse_sort=false&page=1&size=10&Appid=111&Apikey=222
```

#### To get a single product

```bash
{{BASE URL}}/products/{product_id}?organization_id=123&Appid=111&Apikey=222
```

#### To get a product Image

```bash
{{BASE URL}}/images/{the image path from the product response}
```

### A Sample Request to the Proxy Sever Looks Similar to this:

##### _Replace with the correct Credentials_

```bash
curl -X GET "https://tumbu-proxy.vercel.app/api/products?organization_id=123&reverse_sort=false&page=1&size=10&Appid=111&Apikey=222"
```

```bash
curl -X GET "https://tumbu-proxy.vercel.app/api/images/product_bluetooth_headphones_8c3bae_1.jpg"
```

```bash
curl -X GET "https://tumbu-proxy.vercel.app/api/products/12345?organization_id=111&Appid=11&Apikey=11"
```
