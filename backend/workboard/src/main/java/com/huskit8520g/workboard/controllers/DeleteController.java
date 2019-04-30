package com.huskit8520g.workboard.controllers;

import com.huskit8520g.workboard.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotBlank;

@RestController
@RequestMapping(path = "/api", method = RequestMethod.DELETE)
@CrossOrigin(origins = "http://localhost:4200")
public class DeleteController {

  @Autowired
  TaskRepository repository;

  @RequestMapping("/tasks/{id}")
  public void deleteTask(@NotBlank @PathVariable int id) {
    repository.deleteById(id);
  }
}
