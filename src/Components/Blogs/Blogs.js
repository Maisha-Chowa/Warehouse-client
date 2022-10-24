import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2>13.1 Difference between javascript and nodejs</h2>
      <p>
        1. JavaScript is a programming language whereas Node JS is an
        interpreter or running environment for Javascript.
        <br /> 2. JavaScript is used for any client-side activity for one web
        application. On the other hand, Node JS mainly used on the server-side.
        <br />
        3. Javascript is capable enough to add HTML and play with the DOM. On
        the other hand,Nodejs does not have capability to add HTML tags. <br />
        4. Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of
        the Nodejs modules are Lodash, express etc. These modules are to be
        imported from npm.
      </p>
      <h2>13.3 Differences between sql and nosql databases.</h2>
      <p>
        1. Sql is a Relational Database Management System (RDBMS) where Nosql
        Non-relational or distributed database system.
        <br />
        2. Sql databases have fixed or static or predefined schema where nosql
        have dynamic schema. <br />
        3. Sql databases are not suited for hierarchical data storage where No
        Sql databases are best suited for hierarchical data storage.
        <br /> 4. Sql databases are best suited for complex queries where No Sql
        databases are not so good for complex queries
      </p>
      <h2>13.4 What is the purpose of jwt and how does it work</h2>
      <p>
        JWT stands for JSON Web Token. The purpose of jwt is to share security
        information between two parties — a client and a server.
        <br />
        Basically the identity provider(IdP) generates a JWT certifying user
        identity and Resource server decodes and verifies the authenticity of
        the token using secret salt / public key.
        <br />
        1. User sign-in using username and password or google/facebook. <br />
        2. Authentication server verifies the credentials and issues a jwt
        signed using either a secret salt or a private key.
        <br />
        3. User’s Client uses the JWT to access protected resources by passing
        the JWT in HTTP Authorization header.
        <br />
        4. Resource server then verifies the authenticity of the token using the
        secret salt/ public key.
      </p>
    </div>
  );
};

export default Blogs;
