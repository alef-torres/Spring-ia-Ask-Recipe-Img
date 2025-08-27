package br.com.alef.controller;

import br.com.alef.service.ImageService;
import org.springframework.ai.image.ImageResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/imagens")
public class ImageController {

    private final ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping
    public List<String> generateImagem(@RequestParam String prompt){
        ImageResponse response = imageService.generateImage(prompt);
        List<String> imageUrls = response.getResults().stream().map(results -> results.getOutput().getUrl()).toList();
        return imageUrls;
    }
}
