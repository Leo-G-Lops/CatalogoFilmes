package com.example.filmes.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.filmes.model.Filme;


@Controller
public class FilmeController {
    
    @GetMapping("/")
    public String home(Model model) {

        List<Filme> filmes = new ArrayList<>();

        filmes.add(new Filme(
                "Vingadores",
                "https://media.themoviedb.org/t/p/w300_and_h450_face/tCyp6aqOhqGxg6dU0OOIPhOAAne.jpg",
                "Os maiores heróis da terra unidos."
        ));

        filmes.add(new Filme(
                "Batman",
                "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
                "O cavaleiro das trevas."
        ));

        filmes.add(new Filme(
                "Homem-Aranha",
                "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
                "O amigo da vizinhança."
        ));

        model.addAttribute("filmes", filmes);

        return "index";
}
}
