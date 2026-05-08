
package com.httpe.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TransactionController {

    @PostMapping("/transfer")
    public String transfer() {
        return "Transaction Successful";
    }
}
