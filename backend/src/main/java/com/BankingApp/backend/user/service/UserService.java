package com.BankingApp.backend.user.service;

import com.BankingApp.backend.user.dao.IUserDao;
import com.BankingApp.backend.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    IUserDao userDao;

    @Autowired
    public UserService(IUserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }

    @Override
    public Optional<User> findById(Long id) {
        return Optional.of(userDao.findById(id).orElseThrow(RuntimeException::new));
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return Optional.of(userDao.findByUsername(username).orElseThrow(RuntimeException::new));
    }

    @Override
    public User save(User user) {
        return userDao.save(user);
    }

    @Override
    public void deleteById(Long id) {
        userDao.deleteById(id);
        System.out.println("……………………User Was Deleted");
    }
}
