import React from "react";

let getnName = function() {
    return(
        <p>My name is Jiiimmyy!!  </p>,
        getUser.gerFullName()
    );
}

let getUser = {
    userName: "Ashot",
    userSurname: "Karapetyan",
    gerFullName: function (){
        return this.userName + " " + this.userSurname;
    }
}

export default getnName;