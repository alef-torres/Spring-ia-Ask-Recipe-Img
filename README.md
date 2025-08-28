# Projeto: Geração de Receitas e Imagens com Spring AI e OpenAI

Este projeto foi desenvolvido como forma de aprendizado para compreender a integração entre **Spring Boot**, **Spring AI**, **OpenAI** e **React**.  
O objetivo principal é demonstrar como construir **wrappers de IA** básicos para consumo de modelos da OpenAI, criando endpoints que permitem interações de texto e geração de imagens.

---

## 📌 Tecnologias Utilizadas
- **Java + Spring Boot** (backend)
- **Spring AI** (integração com OpenAI)
- **OpenAI** (modelos de linguagem e geração de imagens)
- **React.js** (frontend cliente para consumir a API)
- **Postman** (testes dos endpoints durante o desenvolvimento)

---

## 📖 Estrutura do Projeto

O backend foi estruturado com **Controllers** e **Services** responsáveis por consumir a API da OpenAI.  
Durante o desenvolvimento foram criados endpoints específicos para testar e validar as funcionalidades.

### Endpoints Criados

1. **Perguntar à IA (endpoint genérico)**  
   - Um endpoint simples que recebe uma pergunta via parâmetro e retorna a resposta da IA.

2. **Perguntar à IA com modelo definido no backend**  
   - Endpoint semelhante ao anterior, porém configurado para utilizar um modelo fixo de linguagem definido diretamente no backend.

3. **Gerar receitas personalizadas**  
   - Endpoint que recebe como parâmetros:
     - Ingredientes disponíveis na cozinha  
     - Restrições alimentares  
   - Retorna uma receita criada pela IA considerando os parâmetros passados.

4. **Gerar imagens**  
   - Endpoint que envia uma descrição em texto para a IA e retorna uma imagem gerada a partir do prompt.
---

## 🎯 Objetivo do Projeto
Este projeto tem como objetivo ser **um exemplo prático e didático** para entender:
- Como integrar **Spring AI** com **OpenAI**.  
- Como estruturar um **backend em Java Spring Boot** para consumir serviços de IA.  
- Como expor endpoints REST para diferentes funcionalidades (texto, receitas e imagens).  
- Como habilitar a comunicação com um **frontend React**.  

Trata-se de um projeto **básico**, mas fundamental para compreender a base de como construir **wrappers de IA** que podem ser expandidos em aplicações reais.
