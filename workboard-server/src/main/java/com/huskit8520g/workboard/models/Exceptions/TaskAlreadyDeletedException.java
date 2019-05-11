package com.huskit8520g.workboard.models.Exceptions;

public class TaskAlreadyDeletedException extends Exception {

    public TaskAlreadyDeletedException(String errorMessage) {
        super(errorMessage);
    }
}
