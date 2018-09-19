---
layout: page_full
title:  "plataforma livecom"
categories:
  - item: interface
  - item: ux
permalink: livecom

ano: 2017
weight: 3
priority: 80
color: '#0096D0'

logo: 'livecom_logo.png'

---

Livecom é um sistema web e mobile para compartilhamento de informações através de publicações. É uma maneira de reportar o status de trabalho, compartilhar conhecimento e ter um forúm no ambiente de trabalho, diminuindo a formalidade excedente na comunicação, permitindo uma fluidez mais natural dentro da equipe.

{: .left .full }
<figure><img src="{{ site.baseurl }}/assets/livecom/plataformas.png"/></figure>

<figure><img src="{{ site.baseurl }}/assets/livecom/features.png"/></figure>

### grupos e usuários

No ambiente é possível criar grupos para fazer a segmentação de audiência do conteúdo, priorização de recebimento e organização de publicações. O sistema possui níveis de perfis configuráveis, ou seja, cada tipo de usuário possui uma permissão diferente de visualização e gerenciamento.

Foi desenvolvido os fluxos para criação de usuário e de grupo, além das telas de configuração do sistema que gerencia as permissões.

{: .left .full }
<figure><img src="{{ site.baseurl }}/assets/livecom/grupos.png"/></figure>

{: .antiquewhite }
<div markdown="1">

### mural

As publicações possuem diversos atributos como autor, audiência por meio de grupos, categorias, tags, data e hora, título, conteúdo de texto, imagens em anexo, funcionalidade de curtir e comentários. Foi feito um trabalho na arquitetura de todas informações levando em consideração as possíveis variações de exibição decorrentes da modularização.

{: .img_small }
<figure><img src="{{ site.baseurl }}/assets/livecom/mural_publi.png"/></figure>

O fluxo de publicação possui diversos requisitos, para a versão mobile foi pensada um escopo menor, suprindo as necessidades e mantendo a agilidade no uso do dispositivo móvel.

{: .left .full }
<figure><img src="{{ site.baseurl }}/assets/livecom/publicar.png"/></figure>

</div>

### arquivos

Cada ambiente possui um repositório de arquivos anexados nas publicações e uma interface pra upload de arquivos em geral. Essa centralização integra o sistema para facilitar a reutilização de imagens e documentos.

A estrutura e interface dessa funcionalidade foi pensada para manter a clareza na organização dos diversos tipos de arquivos, e para manter a estrutra disponibilizada no ambiente como um todo, possibilitando a filtragem por meio dos atributos presentes nas publicações.

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

Potenciais clientes podem experimentar a ferramenta criando um ambiente próprio para testar. Foi pensado no fluxo de criação de ambiente, contando com validações de segurança e etapas para autoconfiguração.

{: .img_small }
<figure><img src="{{ site.baseurl }}/assets/livecom/auto.png"/></figure>

Na criação do ambiente é possível realizar o envio de convites para os usuários. Para ter acesso ao ambiente, os convidados precisavam finalizar o cadastro, podendo ser feito por meio dos aplicativos.

{: .left .full }
<figure><img src="{{ site.baseurl }}/assets/livecom/auto2.png"/></figure>

### chat

Um serviço de chat também está presente no sistema, possuindo as funções básicas de conversação. Algumas funcionalidades puderam ser bem integradas como, por exemplo, o envio de arquivo (integrado com o repositório de arquivos), criação de grupo de conversas (integrado com os grupos do ambiente) e push notifications.

{: .left .full }
<figure><img src="{{ site.baseurl }}/assets/livecom/chat.png"/></figure>

### iconografia

Uma família iconográfica foi desenvolvida para transmitir melhor a idéia de algumas literais e também para facilitar o uso no desenvolvimento e otimizar o processo de geração de assets.

{: .left .full }
<figure><img src="{{ site.baseurl }}/assets/livecom/icones.png"/></figure>

### customização

As funcionalidades são modulares a ponto de poderem ser incluídas ou retiradas de um ambiente específico através de parâmetros. É possível remover de um ambiente funcionalidades macro como o chat e arquivos na nuvem. Algumas outras funcionalidades também são possíveis de serem adicionadas ou removidas como, por exemplo, possibilidade de comentários de usuários.

Também é possível personalizar o ambiente de acordo com a identidade do cliente. Foram realizados estudos para definir e limitar quais elementos seriam personalizáveis.
