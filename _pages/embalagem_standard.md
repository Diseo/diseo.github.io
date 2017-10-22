---
layout: page
title:  "embalagem de vidro standard"
categories:
  - item: produto
permalink: embalagem_standard

weight: 3
color: '#e9a17c'

details:
  - item:
      key: ano
      value: 2012
  - item:
      key: equipe
      value: Caio Reis, Lucas Neumann, Tadeu Omae

---
<link type="text/css" rel="stylesheet" href="/css/stylesheet.css"/>

<div id="container">

<div class="content">
  <figure><img src="{{ site.baseurl }}/assets/emb/imagem4.jpg"/></figure>
	<div class="descricao">
    <p>Projeto de embalagem de vidro standard, pensado para pequenas quantidades de produto. O formato interno permite um bom manuseio do produto contido e se torna um diferencial estético. Partindo do mesmo recipiente, mas acrescentando diferentes acabamentos e utilizando uma tampa não convencional, pode-se obter o destaque desejável. Para exemplificar a abrangência de utilização, três produtos de mercados e caraterísticas bem diferentes foram desenvolvidos:</p>
	</div>

  <figure><img src="{{ site.baseurl }}/assets/emb/esquemat.png"/></figure>
  <figure><img src="{{ site.baseurl }}/assets/emb/imagem1.jpg"/></figure>
  <figure><img src="{{ site.baseurl }}/assets/emb/imagem2.jpg"/></figure>
  <figure><img src="{{ site.baseurl }}/assets/emb/imagem3.jpg"/></figure>

</div>

	<div class="itens">
		<div class="item">
      <figure><img src="{{ site.baseurl }}/assets/emb/emb_geleia_thumb.png" class="trs-bounce"/></figure>
			<ul>
				<li style="color:#ffc00f">GELÉIA REAL</li>
				<li>alimentício</li>
				<li>fotossensível</li>
				<li>consistente</li>
				<li>colher</li>
			</ul>
			</div>
		<div class="item">
      <figure><img src="{{ site.baseurl }}/assets/emb/emb_tinta_thumb.png" class="trs-bounce"/></figure>

			<ul>
				<li style="color:#656cb5">TINTA NANQUIM</li>
				<li>artístico</li>
				<li>colorido</li>
				<li>líquido</li>
				<li>pincel</li>
			</ul>
		</div>
		<div class="item">
      <figure><img src="{{ site.baseurl }}/assets/emb/emb_creme_thumb.png" class="trs-bounce"/></figure>
			<ul>
				<li style="color:#84c086">CREME</li>
				<li>cosmético</li>
				<li>sofisticado</li>
				<li>cremoso</li>
				<li>mãos</li>
			</ul>
		</div>
	</div>
</div>

<div class="left" style="display: block;">
	<img class="full-img" src="{{ site.baseurl }}/assets/emb/emb_paral_fundo.jpg"/>
	<img id="tinta-preta" class="mt" src="{{ site.baseurl }}/assets/emb/emb_paral_preto.png" data-speed="-3"/>
	<img id="tinta-azul" class="mt" src="{{ site.baseurl }}/assets/emb/emb_paral_azul.png" data-speed="4"/>
	<img id="tinta-verm" class="mt" src="{{ site.baseurl }}/assets/emb/emb_paral_verm.png" data-speed="1"/>
</div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript">
  $(document).ready(function(){
    $('img.mt').each(function(){
      var $obj = $(this);
      var mtin = parseInt($obj.css("margin-top"));
      $(window).scroll(function() {
        var yPos = mtin -((  (($(window).scrollTop()+$(window).height())/$(document).height()) * $obj.parent().height()) / $obj.data('speed'));
        var mtpos = yPos + 'px';
        $obj.css('margin-top', mtpos);
      });
    });
  });
</script>
