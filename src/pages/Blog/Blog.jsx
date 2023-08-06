import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = "Marvel" + " | " + "Blog";
  }, [location]);
  return (
    <div className="mt-6 mb-16 px-6 sm:px-0">
      <h3 className="text-xl font-bold text-primary"># Blogs</h3>
      <div className="mt-5">
        <h3 className="text-primary font-medium">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client side?
        </h3>
        <div className="mt-1 text-gray-700">
          <b>Answer:</b>
          <p>
            <span className="badge badge-primary">Access token</span>: A refresh
            token is a credential that is also obtained during the
            authentication process, usually along with the access token. Unlike
            the access token, the refresh token has a longer expiration time and
            is used to obtain a new access token when the current one expires.
            When the access token expires, the client application can use the
            refresh token to request a new access token from the server without
            requiring the user to re-enter their credentials. This process is
            known as token refreshing or token rotation.
          </p>
          <p className="mt-5">
            <span className="badge badge-primary text-white">
              Refresh token
            </span>
            : A refresh token is a credential that is also obtained during the
            authentication process, usually along with the access token. Unlike
            the access token, the refresh token has a longer expiration time and
            is used to obtain a new access token when the current one expires.
            When the access token expires, the client application can use the
            refresh token to request a new access token from the server without
            requiring the user to re-enter their credentials. This process is
            known as token refreshing or token rotation.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-primary font-medium">
          2. Compare SQL and NoSQL databases?
        </h3>
        <div className="mt-1 text-gray-700">
          <b>Answer:</b>
          <p>
            {`SQL (Structured Query Language) and NoSQL (Not Only SQL) databases
            are two broad categories of databases that serve different purposes
            and have distinct characteristics. Here's a comparison between the
            two:`}
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">
              1. Data Model:
            </span>{" "}
            <b>SQL:</b> SQL databases use a structured data model with tables,
            rows, and columns. They follow the relational data model, where data
            is stored in predefined schemas with fixed tables and relationships
            between them. Each row in a table represents a specific record, and
            columns represent attributes of that record.
          </p>
          <p>
            <b>NoSQL:</b> NoSQL databases utilize various data models, including
            document-based (e.g., MongoDB), key-value (e.g., Redis),
            column-family (e.g., Cassandra), and graph-based (e.g., Neo4j).
            These models allow more flexibility, as data can be stored in
            non-tabular formats, making it easier to work with semi-structured
            or unstructured data.
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">2. Schema:</span>{" "}
            <b>SQL:</b> SQL databases require a fixed schema, meaning the table
            structure must be defined before data can be inserted. Any changes
            to the schema often involve altering the existing structure, which
            can be time-consuming and may require data migration.
          </p>
          <p>
            <b>NoSQL:</b> NoSQL databases typically have a dynamic or
            schema-less nature. Each record can have different sets of fields,
            allowing for more agile development and data evolution. This
            flexibility is beneficial in scenarios where data requirements
            change frequently.
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">
              3. Query Language:
            </span>{" "}
            <b>SQL:</b> As the name suggests, SQL databases use the SQL language
            for querying and managing data. SQL provides a standardized way to
            interact with the database, making it easier for developers familiar
            with SQL to work with these databases.
          </p>
          <p>
            <b>NoSQL:</b> NoSQL databases often have their query languages,
            specific to their data model. For example, MongoDB uses a JSON-like
            query language, while Cassandra uses CQL (Cassandra Query Language).
            The query syntax may vary significantly between different NoSQL
            databases.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-primary font-medium">
          3. What is express js? What is Nest JS?
        </h3>
        <div className="mt-1 text-gray-700">
          <b>Answer:</b>
          <p>
            {`Express.js and NestJS are both popular frameworks used for building
            server-side applications, particularly web applications and APIs.
            Let's explore each of them:`}
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">Express.js:</span>{" "}
            Express.js, commonly referred to as Express, is a minimal and
            flexible Node.js web application framework. It provides a robust set
            of features for building web applications and APIs quickly and
            easily. Despite its simplicity, it is widely used and has a large
            community of developers.
          </p>
          <ul className="mt-2">
            <li>
              <b>1. Routing:</b> Express allows developers to define routes to
              handle various HTTP requests (GET, POST, PUT, DELETE, etc.) and
              corresponding responses.
            </li>
            <li>
              <b>2. Middleware:</b> Middleware functions can be used to perform
              actions on incoming requests and outgoing responses, such as
              logging, authentication, data parsing, etc.
            </li>
            <li>
              <b>3. Middleware and routing customization:</b> Express allows
              developers to create custom middleware and routers to suit
              specific application needs.
            </li>
          </ul>

          <p className="mt-5">
            <span className="badge badge-primary text-white">NestJS:</span>{" "}
            <b>SQL:</b> NestJS is a progressive, Node.js framework for building
            efficient and scalable server-side applications. It is built on top
            of Express.js but provides additional features and abstractions to
            make the development process more structured and organized. NestJS
            is heavily influenced by Angular (a popular front-end framework) and
            shares many concepts and design patterns with it.
          </p>
          <ul className="mt-2">
            <li>
              <b>1. Dependency Injection: </b> NestJS makes use of dependency
              injection, allowing for better modularity, testability, and
              maintainability of the codebase.
            </li>
            <li>
              <b>2. Decorators:</b> NestJS uses decorators (annotations) to
              define various components, such as controllers, services, and
              modules, making the codebase more declarative and readable.
            </li>
            <li>
              <b>3. Middleware:</b> Like Express, NestJS supports middleware for
              handling cross-cutting concerns like logging, authentication, etc.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-primary font-medium">
          4. What is MongoDB aggregate and how does it work ?
        </h3>
        <div className="mt-1 text-gray-700">
          <b>Answer:</b>
          <p>
            {`In MongoDB, the aggregation framework is a powerful tool that allows
            you to process and transform data in the database, similar to SQL's
            GROUP BY, JOIN, and other data aggregation operations. It enables
            you to perform complex operations on collections and is particularly
            useful for tasks like filtering, grouping, sorting, and calculating
            aggregate values from your data.`}
          </p>
          <p className="mt-5">
            The aggregation framework works on the concept of a pipeline. A
            pipeline is a series of stages, where each stage performs a specific
            operation on the data and passes the result to the next stage in the
            pipeline. The data flows through the pipeline, and at each stage,
            you can manipulate or reshape the data.
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">1. $match:</span>{" "}
            This stage is similar to the find operation and allows you to filter
            documents based on specified criteria. It uses the same query syntax
            as regular find operations.
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">2. $project:</span>{" "}
            This stage is used to reshape documents, select specific fields,
            rename fields, or create new computed fields. It helps in shaping
            the output document for further processing.
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">3. $group:</span>{" "}
            The group stage is used for grouping documents based on a particular
            key and applying aggregate functions like $sum, $avg, $min, $max,
            etc., to calculate aggregate values for each group.
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">4. $sort:</span>{" "}
            This stage sorts the documents based on specified criteria, such as
            sorting by a field in ascending or descending order.
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">
              5. $skip and $limit:
            </span>{" "}
            These stages are used for pagination purposes. $skip skips a certain
            number of documents, and $limit limits the number of documents
            returned.
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">6. $unwind:</span>{" "}
            This stage is used to deconstruct an array field from the input
            documents, creating multiple documents for each element in the
            array. This is useful for operations that need to treat array
            elements as individual documents.
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">7. $lookup:</span>{" "}
            The lookup stage performs a left outer join with another collection
            in the same database and combines documents from both collections
            based on a specified join condition.
          </p>
          <p className="mt-3">
            <span className="badge badge-primary text-white">8. $facet:</span>{" "}
            Introduced in MongoDB 3.4, the facet stage allows you to run
            multiple aggregation pipelines simultaneously and group the results
            under a single output.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
