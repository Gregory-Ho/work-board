package com.huskit8520g.workboard.controllers;

import com.huskit8520g.workboard.models.Task;
import com.huskit8520g.workboard.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/api", method = RequestMethod.POST)
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {

  @Autowired
  TaskRepository repository;

  @RequestMapping("/tasks")
  public Task createTask(@Valid @RequestBody Task body) {
    return repository.save(body);
  }

}
