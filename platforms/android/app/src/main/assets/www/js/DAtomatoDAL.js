/**
 * File Name: DAtomatoDAL.js
 * Revision History:
 * Daiana Arantes, 2019-04-01 : Created
 */
var tomato = {
    DAinsert: function (options, callback){

        function txFunction(tx)
        {
            var sql = "INSERT INTO tomato(commonName, scientificName, size, shapeId," +
                "colorName, moreInfo, foundDate, photo) VALUES(?,?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction()
        {
            console.info("Insert transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    DAselect: function (options, callback)
    {
        function txFunction(tx)
        {
            var sql = "SELECT * FROM tomato WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction()
        {
            console.info("Select transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },
    DAselectAll: function (options, callback)
    {
        function txFunction(tx)
        {
            var sql = "SELECT * FROM tomato;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction()
        {
            console.info("SelectAll transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    DAupdate: function (options, callback)
    {
        function txFunction(tx)
        {
            var sql = "UPDATE tomato SET commonName=?, scientificName=?, size=?, shapeId=?," +
                "colorName=?, moreInfo=?, foundDate=?, photo=? WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction()
        {
            console.info("Update transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    DAdelete: function (options, callback)
    {
        function txFunction(tx)
        {
            var sql = "DELETE FROM tomato WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction()
        {
            console.info("Delete transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var shape = {
    DAselectAll: function (options, callback)
    {
        function txFunction(tx)
        {
            var sql = "SELECT * FROM shape;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction()
        {
            console.info("SelectAll transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};