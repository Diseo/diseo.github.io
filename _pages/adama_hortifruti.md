---
layout: page
title:  "adama hortifruti"
categories:
  - item: interface
  - item: ux
permalink: adama_hf

ano: 2016
weight: 4
priority: 46
color: '#00a351'

logo: 'adama_hf.png'
---

O aplicativo Adama HF permite que os agricultores registrem todas as operações realizadas em suas culturas de Hortifruti. Além disso, o aplicativo possui informações sobre os principais alvos das culturas e indicações do catálogo de produtos da Adama. Há também um serviço para exibição das cotações de preços atualizadas do CEAGESP.

<figure><img class="img_small" src="{{ site.baseurl }}/assets/adama_hf/func.png"/></figure>

Para dar suporte ao desenvolvimento foi escrito um documento descritivo explicando os conceitos e definições, detalhamento da estrutura do servidor e detalhamento do comportamento do aplicativo. O detalhamento levava em conta todos os casos de uso, diferenças de plataforma e transições de telas.

<figure><img src="{{ site.baseurl }}/assets/adama_hf/descritivo.png"/></figure>

### registro de cultivo

A demanda principal do app é o gerenciamento das plantações cultivadas. Cada cultura é relacionada a um terreno que possui atributo de dimensão da área e junto desse cadastro é possível registrar as operações realizadas em cada cultura.

<figure><img class="img_small" src="{{ site.baseurl }}/assets/adama_hf/proj_hortifruti.png"/></figure>

<figure><img src="{{ site.baseurl }}/assets/adama_hf/fluxo_operacao.png"/></figure>

### ícones de culturas

<figure><img class="img_small" src="{{ site.baseurl }}/assets/adama_book/culturas.png"/></figure>
##### ícones desenvolvidos para os aplicativos Adama Hortifruti e Adama Book

### informações de pragas

Dentro do Adama Hortifruti existe o serviço do Adama Alvo - outro app mas que aqui recebe o escopo das culturas de hortifruti - que possui informações dos sintomas causados e como controlar as pragas.

O app possui também um catálogo dos produtos Adama, que é cruzado com as informações de pragas para recomendar de acordo com cada indicação.

<figure><img src="{{ site.baseurl }}/assets/adama_hf/fluxo_alvo.png"/></figure>

### consulta de cotações

Há também o serviço para consulta das cotações atuais, com origem no site da CEAGESP.

<figure><img src="{{ site.baseurl }}/assets/adama_hf/fluxo_cotacao.png"/></figure>

<br>
Apps na [Google Play](https://play.google.com/store/apps/details?id=br.com.livetouch.adamahortifruti) e na [App Store](https://itunes.apple.com/br/app/adama-hf/id1171143876?mt=8)
