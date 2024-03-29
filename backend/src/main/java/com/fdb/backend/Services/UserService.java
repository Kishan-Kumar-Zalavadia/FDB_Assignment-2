package com.fdb.backend.Services;

import com.fdb.backend.Entities.User;
import com.fdb.backend.Repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // ---------------------------------------------------------------------------------------------------
    public User fetchUserByEmailId(String emailID) {
        return userRepository.findByEmailID(emailID);
    }

    // ---------------------------------------------------------------------------------------------------
    public User fetchUserByEmailIdAndPassword(String emailId, String password) {
        return userRepository.findByEmailIDAndPassword(emailId, password);
    }

    // ---------------------------------------------------------------------------------------------------
    public List<User> fetchAllUsers() {
        return userRepository.findAll();
    }

    // ---------------------------------------------------------------------------------------------------

    public User fetchUserByUserId(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }



}
