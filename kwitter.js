function addUser()
{
    
    user_name = document.getElementById("user_name").vale;
    
    localStorage.setItem("user_name", usr_name);
    
    window.location = "Kwitter_room.html";
}