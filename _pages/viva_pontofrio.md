---
layout: page
title:  "viva pontofrio"
categories:
  - item: interface
  - item: ux
permalink: viva_pontofrio

weight: 2
priority: 75
color: '#b53334'

details:
  - item:
      key: ano
      value: 2014/2015
  - item:
      key: equipe
      value: Tuanny Harumi, Mikail Freitas
---

O Viva Pontofrio tinha como objetivo incentivar as compras nas lojas físicas através do recebimento de cupons de desconto através do uso da câmera interna à aplicação. Também foi explorado o uso de geolocalização para apresentar as lojas com produtos em estoque e beacons presentes nas lojas para captar os clientes. O uso de in-app push e direcionamento de push por segmentação acrescentavam valor às campanhas de marketing.

Essa versão do aplicativo estava em prova de conceito e não foi lançada.

<div class="left" markdown="1">
### camêra

Para descobrir os cupons bastava apontar a câmera do aplicativo para os alvos presentes em cadernos de vendas e em _wobblers_, peças gráficas localizadas nos pontos de venda.

<figure><img style="position: absolute; z-index: -1; width: 92rem;" src="{{ site.baseurl }}/assets/app_image/mockup1.jpg"/></figure>
<figure><img style="margin-top: -1.6rem;" src="{{ site.baseurl }}/assets/app_image/mockup_camera__.gif"/></figure>
</div>

### cupons

Ao salvar o cupom ele era guardado numa lista que informava o valor do desconto, o tempo de expiração, código para desconto na compra e atalho para verificação de estoque.

<figure><img src="{{ site.baseurl }}/assets/app_image/mockup2.jpg"/></figure>

{: .left}
<div markdown="1">

### localizador

A tela do localizador de lojas e estoque de produto mostrava as lojas mais próximas através de um mapa, mas era possível visualizar também em formato de lista.

<figure><img src="{{ site.baseurl }}/assets/app_image/mockup3_.jpg"/></figure>

</div>

### preferências

O aplicativo possuia um sistema para captar os interesses do usuário, a fim de direcionar os segmentos de produtos de forma inteligente.

<figure><img class="img_small" src="{{ site.baseurl }}/assets/app_image/mockup4.jpg"/></figure>

### dicas de uso

Foram desenvolvidas telas de tutorial para o primeiro acesso (onboarding), essas dicas podiam ser reativadas através do menu. Outras ações informativas foram feitas, como tooltips que são instruções menos invasivas, para casos em que a exibição da informação era bem controlada.

{: .img_small}
<figure><img src="{{ site.baseurl }}/assets/app_image/onboarding.png"/></figure>

### desenvolvimento

Uma versão anterior utilizava a realidade aumentada para enriquecer a câmera do aplicativo. Porém, foi elaborada uma maneira que supria a necessidade da geração de cupons e ganhava-se muito em desempenho sem perder o envolvimento que a câmera proporcionava. Essa e outras otimizações foram realizadas juntos ao time de desenvolvedores.

Durante o processo, aconteceram remodelagem nos recursos do aplicativo, bem como a adição de novas funcionalidades, sempre se baseando nas regras de negócio atuantes. Esses pontos foram realizados junto ao time de marketing da empresa de varejo.

Houve também uma reformulação no layout do app como um todo, acompanhando a versão de funcionalidades e criando uma integridade entre todos os elementos e telas. A construção dos elementos foram baseados no comportamento de componentes nativos e também nas diferenças entre as plataformas Android e iOS.

<figure><img class="img_small" src="{{ site.baseurl }}/assets/app_image/v2.png"/></figure>

> diff v2 e v3
