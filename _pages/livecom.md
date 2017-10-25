---
layout: page
title:  "plataforma livecom"
categories:
  - item: interface
  - item: ux
permalink: livecom

ano: 2017
weight: 4
priority: 80
color: '#0096D0'

logo: 'livecom_logo.png'

---

Livecom é um sistema web e mobile para compartilhamento de informações através de publicações. É uma maneira de reportar o status de trabalho, compartilhar conhecimento e ter um forúm no ambiente de trabalho para que não seja tão formal e flua com mais naturalidade dentro da equipe.

<figure><img src="{{ site.baseurl }}/assets/livecom/plataformas.png"/></figure>

<figure><img src="{{ site.baseurl }}/assets/livecom/features.png"/></figure>

### grupos e usuários

No ambiente é possível criar grupos para fazer a segmentação de conteúdo, priorização de recebimento e organização de publicações. O sistema possui níveis de perfis flexíveis, ou seja, cada tipo de usuário com uma permissão diferente de visualização e gerenciamento. Foi desenvolvido os fluxos para criação de usuário e de grupo, além de telas com as diversas configurações da ferramenta.

<figure><img src="{{ site.baseurl }}/assets/livecom/grupos.png"/></figure>

### mural

As publicações possuem diversos atributos como autor, grupos direcionados, categorias, tags, data e hora, título, conteúdo de texto, imagens em anexo, funcionalidade de curtir e comentários. Foi feito um trabalho de arquitetura de todas informações presentes levando em consideração as possíveis variações de exibição.

{: .img_small }
<figure><img src="{{ site.baseurl }}/assets/livecom/mural_publi.png"/></figure>

O fluxo de publicação possuia diversos requisitos, a versão mobile foi simplificada em relação a versão desktop.

<figure><img src="{{ site.baseurl }}/assets/livecom/publicar.png"/></figure>

### arquivos

Possuindo um repositório dos arquivos anexados nas publicações, foi desenvolvido uma interface pra upload de arquivos em geral, centralizando e integrando para facilitar o uso posterior das imagens e documentos.

A estrutura e interface dessa funcionalidade foi pensada para manter a clareza na organização dos diversos tipos de arquivos, e para manter a estrutra disponibilizada no ambiente como um todo, possibilitando diversos tipos de filtros.

{: .img_small }
<figure><img src="{{ site.baseurl }}/assets/livecom/arquivos.png"/></figure>

### notificações e sidebox

As plataformas possuem um centro de notificações para exibir diversos eventos do ambiente.

A interface foi detalhada para que a diferenciação dos status das notificações ficasse bem clara, assim como a diagramação dos outros itens como data e hora, imagem de perfil e conteúdo foi definida como um todo.

{: .img_small }
<figure><img src="{{ site.baseurl }}/assets/livecom/notificacao.png"/></figure>

O espaço lateral direito utilizado para as notificações foram aproveitadas para deixar atalhos à disposição, como acesso rápido à grupos e arquivos.

{: .img_small }
<figure><img src="{{ site.baseurl }}/assets/livecom/sidebox.png"/></figure>

### autosetup

Potenciais clientes podem experimentar a ferramenta criando um ambiente próprio para testar. Foi pensado o fluxo de criação de ambiente, contando com validações de segurança e etapas para autoconfiguração.

{: .img_small }
<figure><img src="{{ site.baseurl }}/assets/livecom/auto.png"/></figure>

Ao criar o ambiente, era possível já realizar o envio de convites. Para ter acesso ao ambiente os convidados precisavam finalizar o cadastro, podendo ser feito pelos aplicativos.

<figure><img src="{{ site.baseurl }}/assets/livecom/auto2.png"/></figure>

### chat

Um serviço de chat também está presente no sistema, possuindo as funções básicas de conversação. Algumas funcionalidades puderam ser bem integradas como o envio de arquivo (integrado com o repositório de arquivos),
criação de grupo de conversas (integrado com os grupos do ambiente) e push notifications.

<figure><img src="{{ site.baseurl }}/assets/livecom/chat.png"/></figure>

### iconografia

Uma família iconográfica foi desenvolvida para transmitir melhor a idéia de algumas literais e também para facilitar o uso no desenvolvimento e otimizar o processo de geração de assets.

<figure><img src="{{ site.baseurl }}/assets/livecom/icones.png"/></figure>

### customização

As funcionalidades são modulares a ponto de poderem ser incluídas ou retiradas de um ambiente específico através de parâmetros. É possível remover de um ambiente funcionalidades macro como o chat e arquivos na nuvem, mas as micro funcionalidades também são parametrizadas, como possibilidade de comentários de usuários.

Também é possível personalizar o ambiente de acordo com a identidade da cliente, foram realizados estudos para definir e limitar o que seria variável.
