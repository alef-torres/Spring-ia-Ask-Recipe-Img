package br.com.alef.controller;

import br.com.alef.service.ChatService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ia")
public class GenerativeIAController {

    private final ChatService service;

    public GenerativeIAController(ChatService service) {
        this.service = service;
    }

    @GetMapping("/ask-ia")
    public String getResponse(@RequestParam String prompt){
        return service.getResponse(prompt);
    }

    @GetMapping("/ask-ia-options")
    public String getResponseWithOptions(@RequestParam String prompt){
        return service.getResponseWithOptions(prompt);
    }

}
