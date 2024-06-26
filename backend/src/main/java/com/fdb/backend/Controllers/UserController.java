package com.fdb.backend.Controllers;


import com.fdb.backend.Entities.User;
import com.fdb.backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService service) {
        this.userService = service;
    }


// ---------------------------------------------------------------------------------------------------
// Save User
@PostMapping("/register")
public User registerUser(@RequestBody User user) throws Exception {
    String tempEmailId = user.getEmailID();
    if (tempEmailId != null && !tempEmailId.isEmpty()) {
        User existingUser = userService.fetchUserByEmailId(tempEmailId);
        if (existingUser != null) {
            throw new Exception("User with " + tempEmailId + " already exists");
        }
    }
    return userService.saveUser(user);
}
// ---------------------------------------------------------------------------------------------------
// User login
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        String tempEmailId = user.getEmailID();
        String tempPass = user.getPassword();
        User userObj = null;
        if (tempEmailId != null && tempPass != null) {
            userObj = userService.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if (userObj == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad Credentials");
        }
        return ResponseEntity.ok(userObj);
    }


// ---------------------------------------------------------------------------------------------------
// Get all Users
    @GetMapping("")
    public List<User> getAllUsers() {
        return userService.fetchAllUsers();
    }

// ---------------------------------------------------------------------------------------------------
// Get user by userID
    @GetMapping("/{userId}")
    public User getUserById(@PathVariable Long userId) throws Exception{
        User user = userService.fetchUserByUserId(userId);
        if (user == null) {
            // Handle the case where the user with the specified ID is not found.
            throw new Exception("User with ID " + userId + " not found");
        }
        return user;
    }

}
