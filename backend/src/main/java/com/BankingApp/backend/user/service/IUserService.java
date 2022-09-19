package com.BankingApp.backend.user.service;

import com.BankingApp.backend.user.entity.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    List<User> findAll();

    Optional<User> findById(Long id);

    Optional<User> findByUsername(String username);

    User save(User user);

    void deleteById(Long id);

}
