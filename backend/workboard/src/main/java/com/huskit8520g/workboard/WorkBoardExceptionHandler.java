package com.huskit8520g.workboard;

import com.huskit8520g.workboard.models.Exceptions.InvalidUpdateOperationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class WorkBoardExceptionHandler {

    @ExceptionHandler(InvalidUpdateOperationException.class)
    public ResponseEntity<Object> handleInvalidUpdateOperationException(InvalidUpdateOperationException exception) {
        return new ResponseEntity<>(exception.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
