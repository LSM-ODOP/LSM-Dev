[![codecov](https://codecov.io/gh/One-District-One-Product/ODOP-Dev/branch/main/graph/badge.svg)](https://codecov.io/gh/One-District-One-Product/ODOP-Dev)

## One District One  Product
The One District One Product (ODOP) initiative is a unique program designed to promote the distinctive products that each district of Karnataka excels in. It aims to support local artisans and producers, uplift local economies, and preserve traditional craftsmanship.

In our specific implementation of the ODOP project, the primary objective of the platform is to cut out intermediaries from the supply chain, enabling producers to receive fair remuneration for their products while giving consumers access to a diverse range of authentic ODOP items.

## Getting Started
To get started with our ODOP project, you don't need to install any software. It's an online platform that can be accessed from your web browser.

## Prerequisites
The ODOP project is accessible through a web browser, so you only need an internet connection to get started. There are no specific software or hardware prerequisites for using the project.

## Installation

As mentioned earlier, there's no installation required for our ODOP project. It is a web-based platform, and you can access it directly by visiting project website.

```npm start```
```npm test```
```npm run build```

##Screenshots

<img src="1.png">

<img src="2.png">

##Flowchart
```mermaid
sequenceDiagram
    autonumber
    actor LocalProducer as Local Producer
    participant ODOPPlatform as ODOP Platform
    actor Consumer
    participant LogisticsProvider as Logistics Provider
    participant PaymentGateway as Payment Gateway

    LocalProducer->>ODOPPlatform: Register and upload products
    ODOPPlatform-->>LocalProducer: Confirm product listing

    Consumer->>ODOPPlatform: Browse local products
    ODOPPlatform-->>Consumer: Display local products

    Consumer->>ODOPPlatform: Select product and add to cart
    ODOPPlatform-->>Consumer: Update cart

    Consumer->>ODOPPlatform: Proceed to checkout
    ODOPPlatform->>PaymentGateway: Initiate payment process
    PaymentGateway-->>ODOPPlatform: Provide payment options

    ODOPPlatform-->>Consumer: Provide payment options
    Consumer->>PaymentGateway: Enter payment details
    PaymentGateway-->>ODOPPlatform: Confirm payment
    ODOPPlatform-->>Consumer: Confirm payment

    ODOPPlatform-->>LocalProducer: Notify new order
    LocalProducer-->>ODOPPlatform: Confirm order and process shipment
    ODOPPlatform->>LogisticsProvider: Initiate shipment
    LogisticsProvider-->>ODOPPlatform: Provide shipping details

    ODOPPlatform-->>Consumer: Provide shipping details
    Consumer-->>ODOPPlatform: Receive product

    Consumer->>ODOPPlatform: Provide feedback/rating
    ODOPPlatform-->>LocalProducer: Share feedback
```
```mermaid
graph TD;
    ODOPPlatform-->Wholesaler;
    ODOPPlatform-->Retailer;
```
