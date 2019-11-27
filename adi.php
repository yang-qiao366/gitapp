<?php
require 'mysqli_connect.php';

$json = '';
$data = array();
class User 
{
public $f_id;
public $name;
public $phone;
public $useradd;
public $time;
public $ipadd;
public $city;
}

$sql = "SELECT * FROM hao_table";
$result = $mysqli->query($sql);

if($result){
    echo "查询成功";
    while ($row = mysqli_fetch_array($result,MYSQL_ASSOC))
    {
    $user = new User();
    $user->f_id = $row["f_id"];
    $user->name = $row["name"];
    $user->phone = $row["phone"];
    $user->useradd = $row["useradd"];
    $user->time = $row["time"];
    $user->ipadd = $row["ipadd"];
    $user->city = $row["city"];
    $data[]=$user;
    }
    $json = json_encode($data);//把数据转换为JSON数据.
    echo "{".'"user"'.":".$json."}";
    }else{
    echo "查询失败";
    }
$mysqli->close();


DELETE FROM `ping`.`hao_table` WHERE `hao_table`.`f_id` = 13

http://wx.szxiangmi.com/01/del_post.php


adsDel