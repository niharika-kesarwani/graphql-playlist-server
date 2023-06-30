const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = process.env.port || 4000;

// allow cross-origin requests
app.use(cors());

//connect to mlab database
mongoose.connect(
  "mongodb+srv://test:123@gql-playlist.ceervex.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log("now listening to requests on port 4000"));
