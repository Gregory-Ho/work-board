package com.huskit8520g.workboard.controllers;

import com.huskit8520g.workboard.models.Exceptions.InvalidUpdateOperationException;
import com.huskit8520g.workboard.models.Task;
import com.huskit8520g.workboard.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/api", method = RequestMethod.PUT)
@CrossOrigin(origins = "http://localhost:4200")
public class PutController {

    @Autowired
    TaskRepository repository;

    @RequestMapping("/tasks/{id}")
    public Task updateTaskById(@PathVariable int id, @Valid @RequestBody Task updatedTaskModel) throws InvalidUpdateOperationException {
        if (id != updatedTaskModel.getId()){
            throw new InvalidUpdateOperationException("The path id " + id + " and model id " + updatedTaskModel.getId() + " do not match. Ignoring update request.");
        }
        if (!repository.existsById(id)) {
            throw new InvalidUpdateOperationException("Could not find the Task model with id " + id + " to update.");
        }

        return repository.save(updatedTaskModel);
    }
}
