package com.example.filmes.model;

public class Filme {
    private String titulo;
    private String imagem;
    private String descricao;

    public Filme(String titulo, String imagem, String descricao){
        this.titulo = titulo;
        this.imagem = imagem;
        this.descricao = descricao;
    }

    public String getTitulo(){
        return titulo;
    }

    public String getImagem(){
        return imagem;
    }

    public String getDescricao(){
        return descricao;
    }
}
