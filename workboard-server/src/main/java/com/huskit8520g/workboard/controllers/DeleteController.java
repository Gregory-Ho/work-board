package com.huskit8520g.workboard.controllers;

import com.huskit8520g.workboard.models.Exceptions.InvalidDeleteTaskIdException;
import com.huskit8520g.workboard.models.Exceptions.TaskAlreadyDeletedException;
import com.huskit8520g.workboard.models.Task;
import com.huskit8520g.workboard.models.TaskStatus;
import com.huskit8520g.workboard.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotBlank;
import java.util.NoSuchElementException;

@RestController
@RequestMapping(path = "/api", method = RequestMethod.DELETE)
@CrossOrigin(origins = "http://localhost:4200")
public class DeleteController {

    @Autowired
    TaskRepository repository;

    @RequestMapping("/tasks/{id}")
    public Task deleteTask(@NotBlank @PathVariable int id) throws InvalidDeleteTaskIdException, TaskAlreadyDeletedException {
        Task taskToDelete;
        try {
            taskToDelete = repository.findById(id).get();
        } catch (NoSuchElementException exception) {
            throw new InvalidDeleteTaskIdException("Could not find task with id " + id + " to delete.");
        }
        if (taskToDelete.getStatus() == TaskStatus.DELETED) {
            throw new TaskAlreadyDeletedException("The task with id " + id + " is already deleted.");
        }

        taskToDelete.setStatus(TaskStatus.DELETED);
        return repository.save(taskToDelete);
    }
}
