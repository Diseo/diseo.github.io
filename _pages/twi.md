---
layout: page
title:  "twi"
categories:
  - item: programação
  - item: gráfico
permalink: twi

ano: 2010
priority: 43
weight: 1
color: '#b6dce7'

details:
  - item:
      key: ano
      value: 2010
  - item:
      key: equipe
      value: Gabrielle Ery Higa

---

O projeto Twi é um jogo desenvolvido em Processing para a disciplina Fundamentos da Computação I do curso de Design da FAUUSP.

<figure><img style="max-width: 64rem;" src="{{ site.baseurl }}/assets/twi/twi_anim.gif"/></figure>

### objetivo

O jogador controla o passarinho roxo, o Twi, que precisa de auxílio para voar e atacar o inimigo. Os pontos são acumulados de acordo com o tempo de vôo mais a quantidade de inimigos derrubados.

O jogador deve ir percorrendo as fases e ganhando pontos. O jogo foi inicialmente pensado para ter 4 níveis representando as 4 estações do ano e cada uma delas possuiria 3 fases.

<figure><img src="{{ site.baseurl }}/assets/twi/twi_gaiola.jpg"/></figure>

### mecânicas

Quando a fase é iniciada, o jogador deve auxiliar no vôo do Twi apertando a tecla espaço para movimentá-lo para cima. Quando não ocorre nenhuma interação do jogador, o personagem desce continuamente, e ao sair da tela na parte de baixo é perdida uma vida.

O Twi não deve encostar nos corvos inimigos que vem voando em sentido contrário. Os corvos de olhos brancos voam em linha reta horizontalmente e os corvos de olhos vermelhos voam em movimento de onda (senóide).

<figure><img src="{{ site.baseurl }}/assets/twi/twi_fruta.jpg"/></figure>

Conforme o jogo vai passando, vão surgindo outros inimigos que se movimentam de forma diferente como, por exemplo, corvos que vem em direção ao Twi e logo em seguida voltam, como um bumerangue. Na estação do inverno, o ambiente possui uma continua nevasca, o que dificulta visualizar o inimigo que é um corvo branco.
