/**
 * File Name: DAdatabase.js
 * Revision History:
 * Daiana Arantes, 2019-04-28 : Created
 */
var db;

function errorHandler(tx, error)
{
    console.error("SQL error: " + tx + " (" + error.code + "): " + error.message);
}

var DB = {
    DACreateDatabase: function () {
        var shortName = "TomatoDB";
        var version = "1.0";
        var displayName = "DB for tomato book app";
        var dbSize = 2 * 1024 * 1024;

        function dbCreate() {
            console.info("Success: Database created successfully");
        }
        
        db = openDatabase(shortName, version, displayName, dbSize, dbCreate);
    },
    DACreateTables: function ()
    {
        function txFunction(tx)
        {
            var sql = "DROP TABLE IF EXISTS shape;";
            var options = [];
            tx.executeSql(sql, options, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS shape( " +
                 "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                 "name VARCHAR(20) NOT NULL);";
            tx.executeSql(sql, options, successCreate, errorHandler);

            function successCreate()
            {
                console.info("Table shape created successfully");
            }
            sql = "INSERT INTO shape(name) VALUES('Cocktail');";
            tx.executeSql(sql, options, successTransaction, errorHandler);

            sql = "INSERT INTO shape(name) VALUES('Standard');";
            tx.executeSql(sql, options, successTransaction, errorHandler);

            sql = "INSERT INTO shape(name) VALUES('Beefsteak');";
            tx.executeSql(sql, options, successTransaction, errorHandler);

            sql = "INSERT INTO shape(name) VALUES('Round');";
            tx.executeSql(sql, options, successTransaction, errorHandler);

            sql = "INSERT INTO shape(name) VALUES('Flattened Globe');";
            tx.executeSql(sql, options, successTransaction, errorHandler);

            sql = "INSERT INTO shape(name) VALUES('Pear');";
            tx.executeSql(sql, options, successTransaction, errorHandler);

            function successTransaction()
            {
                console.info("Insert transaction successful");
            }

            sql = "CREATE TABLE IF NOT EXISTS tomato( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "commonName VARCHAR(30) NOT NULL," +
                "scientificName VARCHAR(30) NOT NULL," +
                "size VARCHAR(10)," +
                "shapeId INTEGER NOT NULL," +
                "colorName VARCHAR(30) NOT NULL," +
                "moreInfo TEXT," +
                "foundDate DATE," +
                "photo BLOB," +
                "FOREIGN KEY(shapeId) REFERENCES shape(id));";

            tx.executeSql(sql, options, successCreate, errorHandler);

            function successCreate()
            {
                console.info("Table tomato created successfully");
            }

            tx.executeSql(sql, options, successCreate, errorHandler);
        }
        function successTransaction()
        {
            console.info("Create table transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    DADropTables: function ()
    {
        function txFunction(tx)
        {
            var sql = "DROP TABLE IF EXISTS shape;";
            var options = [];

            tx.executeSql(sql, options, successDrop, errorHandler);

            sql = "DROP TABLE IF EXISTS tomato;";

            tx.executeSql(sql, options, successDrop, errorHandler);

            function successDrop()
            {
                console.info("Table dropped successfully");
            }
        }

        function successTransaction()
        {
            console.info("Drop table transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};