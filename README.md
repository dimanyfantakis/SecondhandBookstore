<div align="center">
  <h1>Secondhand Bookstore</h1>
  <p>
    A secondhand bookstore designed for IT guys
  </p>
  
[![Contributors][contributors-shield]][contributors-url]
[![Commits][commits-shield]][commits-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

[**View Demo**][demo-url] · [**Report Bug**][issues-url] · [**Request Feature**][issues-url]

</div>



## About

### Motivation

An e-commerce full-stack web application where users can make listings to sell IT related books they no longer need.

### Features

* Spring Boot backend
    * MySQL database to store the users' and books' information
    * User authorization via Spring Security
    * User authentication via JWT
* Angular front-end application
    * Library to view all book listings
    * Profile component available to registered users to add/remove a book listing
    * [IT Bookstore API][ITBookstoreAPI-url] to find the book in order to make a listing
    * Stripe payment

### Tech Stack

***Backend***

* [![SpringBoot][SpringBoot]][SpringBoot-url]
* [![SpringSecurity][SpringSecurity]][SpringSecurity-url]
* [![MySQL][MySQL]][MySQL-url]
* [![Hibernate][Hibernate]][Hibernate-url]
* [![ApacheMaven][ApacheMaven]][ApacheMaven-url]

***Frontend***

* [![Angular][Angular]][Angular-url]
* [![MaterialDesign][MaterialDesign]][MaterialDesign-url]
* [![MaterialDesignIcons][MaterialDesignIcons]][MaterialDesignIcons-url]

***Payment***

* [![Stripe][Stripe]][Stripe-url]



## Getting Started

### Requirements

_Clone the client repository_
```javascript
git clone -b client https://github.com/dimanyfantakis/SecondhandBookstore.git
```

_Clone the server repository_
```javascript
git clone -b server https://github.com/dimanyfantakis/SecondhandBookstore.git
```

### Installation

*Install NPM packages*

1. Navigate to the cloned client branch folder via a terminal and run
    ```javascript
    npm install
    ```

2. Import the maven project of the cloned server branch in an IDE

3. To build the project run:
    ```javascript
    mvn compile
    ```
    ***Note:*** The server is configured to use a MySQL database named **secondhand_bookstore** that runs locally on port: **3306**. You have to configure your application.properties file located in /src/main/resources/ as demonstrated in the [Spring Boot documentation][spring-boot-url]. You would also need to define a **stripe.api.secretKey** property and set its value to the secret key from your Stripe account.



## Usage

1. To run the server run the main function of the SecondhandBookstoreApplication.java file from the server branch located in: 
    ```javascript
    /src/main/java/com/github/dimanyfantakis/SecondhandBookstore
    ```

2. To run the client navigate to thecloned client branch folder and run
    ```javascript
    ng serve
    ```

In order to buy or sell a book you have to create an account by registering via the navigation bar

* You are now eligible to buy a book by selecting your desired book in the library and adding your credit card credentials

* In order to make or delete a book listing, simply use the profile component that will be rendered after you have succesfully logged in

    * To make a book listing click on the Add Book tab. Use the search bar to find the book you are willing to sell and make the listing.

    * To delete a book listing click on the View Books tab to view all your book listings and delete simply the listing that's no longer available

### Screenshots

***Library***

![LibraryScreenshot][LibraryScreenshot-url]

***Make a listing***
![MakeListingScreenshot][MakeListing-url]

***Viewing your listings***
![ViewListingsScreenshot][ViewListings-url]

***Stripe Payment***
![StripePaymentScreenshot][StripePayment-url]



## Authors

Dimitris Anyfantakis



## License

See [License][license-url] for more information regarding the license



## Acknowledgments

[IT Bookstore API][ITBookstoreAPI-url]



[contributors-shield]: https://img.shields.io/github/contributors/dimanyfantakis/SecondhandBookstore
[contributors-url]: https://github.com/dimanyfantakis/SecondhandBookstore/graphs/contributors
[commits-shield]: https://img.shields.io/github/last-commit/dimanyfantakis/SecondhandBookstore
[commits-url]: https://github.com/dimanyfantakis/SecondhandBookstore/commit/main
[license-shield]: https://img.shields.io/github/license/dimanyfantakis/SecondhandBookstore
[license-url]: https://https://github.com/dimanyfantakis/SecondhandBookstore/blob/main/LICENSE
[issues-shield]: https://img.shields.io/github/issues/dimanyfantakis/SecondhandBookstore
[issues-url]: https://github.com/dimanyfantakis/SecondhandBookstore/issues/
[demo-url]: https://github.com/dimanyfantakis/SecondhandBookstore

[MySQL]: https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white
[MySQL-url]: https://www.mysql.com/
[Angular]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=Angular&logoColor=black
[Angular-url]: https://angular.io/
[MaterialDesign]: https://img.shields.io/badge/MaterialDesign-757575?style=for-the-badge&logo=MaterialDesign&logoColor=black
[MaterialDesign-url]: https://material.angular.io/
[SpringBoot]: https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=black
[SpringBoot-url]: https://spring.io/projects/spring-boot
[SpringSecurity]: https://img.shields.io/badge/SpringSecurity-6DB33F?style=for-the-badge&logo=SpringSecurity&logoColor=black
[SpringSecurity-url]: https://spring.io/projects/spring-security
[Hibernate]: https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=black
[Hibernate-url]: https://hibernate.org/
[MaterialDesignIcons]: https://img.shields.io/badge/MaterialDesignIcons-2196F3?style=for-the-badge&logo=MaterialDesignIcons&logoColor=white
[MaterialDesignIcons-url]: https://materialdesignicons.com/
[Stripe]: https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=Stripe&logoColor=white
[Stripe-url]: https://stripe.com/en-gb-gr
[ApacheMaven]: https://img.shields.io/badge/ApacheMaven-C71A36?style=for-the-badge&logo=ApacheMaven&logoColor=black
[ApacheMaven-url]: https://maven.apache.org/

[ITBookstoreAPI-url]: https://api.itbook.store/#api-overview
[spring-boot-url]: https://spring.io/guides/gs/accessing-data-mysql/

[LibraryScreenshot-url]: https://drive.google.com/uc?export=view&id=1CQn8BJ8Vn9ru3LejgA1Drdv81t8lYdmH
[MakeListing-url]: https://drive.google.com/uc?export=view&id=1mw2vSy8jjmi_4UGdjJPXiTdEH-iOy2t6
[ViewListings-url]: https://drive.google.com/uc?export=view&id=1A-kmx6BsqdUvNefxVgmfGczK24JLRr9d
[StripePayment-url]: https://drive.google.com/uc?export=view&id=1BuLv0HLxb3LVa3u1fQ-qHwQHgvfw9l8G