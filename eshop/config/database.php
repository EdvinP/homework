<?php

class Database {
    
    private $host = "localhost";
    private $dbName = "eshop";
    private $userName = "root";
    private $password = "";
    public $connection;
    
    public function getConnection()
    {
        $this->connection = null;
        
        try {
            $this->connection = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->dbName, $this->userName, $this->password);
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        
        return $this->connection;
    }
}