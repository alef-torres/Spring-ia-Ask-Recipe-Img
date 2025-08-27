package br.com.alef.controller;

import br.com.alef.service.RecipeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/receitas")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/receitIA")
    public String GeradorReceitas(@RequestParam String ingredientes,
                                  @RequestParam(defaultValue = "any") String cozinha,
                                  @RequestParam(defaultValue = "none") String dieta) {
        return recipeService.createRecipe(ingredientes,cozinha,dieta);
    }
}
