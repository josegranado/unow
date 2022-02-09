<?php 
    include_once 'Database/database.php';
    class User extends Database{
        public function getUser($id){
            $query = $this->connect()->query('SELECT * FROM users where id='.$id);
            return $query;
        }
        public function getUserByApiToken($api_token){
            $query = $this->connect()->query("SELECT * FROM users WHERE api_token='".$api_token."'");
            return $query;
        }
    }