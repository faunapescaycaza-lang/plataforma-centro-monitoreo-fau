import React from 'react';
import './CentroMonitoreos.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2010pt" height="339pt" viewBox="0.00 0.00 2010.00 339.00">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 335.21)">
<title>DosGrafosDeRedAlineados</title>
<polygon fill="white" stroke="none" points="-4,4 -4,-335.21 2005.5,-335.21 2005.5,4 -4,4"/>
<text xml:space="preserve" text-anchor="middle" x="1000.75" y="-8.8" font-family="Times,serif" font-size="16.00">Red de Interconexión del Centro de Monitoreo Fauna Neuquén</text>
<!-- CEMFN -->
<g id="node1" class="node">
<title>CEMFN</title>
<polygon fill="#a9cce3" stroke="black" points="1044.51,-288.24 1044.51,-311.07 906.22,-327.21 710.65,-327.21 572.36,-311.07 572.36,-288.24 710.65,-272.1 906.22,-272.1 1044.51,-288.24"/>
<polygon fill="none" stroke="black" points="1048.51,-284.68 1048.51,-314.63 906.45,-331.21 710.41,-331.21 568.36,-314.63 568.36,-284.68 710.41,-268.1 906.45,-268.1 1048.51,-284.68"/>
<text xml:space="preserve" text-anchor="start" x="662.21" y="-302.06" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#1c2833">            </text>
<text xml:space="preserve" text-anchor="start" x="708.88" y="-302.06" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="14.00" fill="#1c2833">Centro de Monitoreo Fauna Neuquén</text>
<text xml:space="preserve" text-anchor="start" x="739.99" y="-288.06" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#1c2833">            (CEMFN)        </text>
</g>
<!-- SMdA -->
<g id="node2" class="node">
<title>SMdA</title>
<polygon fill="#d5f5e3" stroke="black" points="265.19,-231.1 125.67,-231.1 125.67,-195.1 265.19,-195.1 265.19,-231.1"/>
<text xml:space="preserve" text-anchor="middle" x="195.43" y="-209.8" font-family="Helvetica,sans-Serif" font-size="11.00">San Martín de los Andes</text>
</g>
<!-- CEMFN&#45;&gt;SMdA -->
<g id="edge1" class="edge">
<title>CEMFN-&gt;SMdA</title>
<path fill="none" stroke="#1a5276" stroke-width="2" d="M641.74,-275.66C518.36,-258.65 356.52,-236.32 265.49,-223.77"/>
</g>
<!-- VLA -->
<g id="node3" class="node">
<title>VLA</title>
<polygon fill="#d5f5e3" stroke="black" points="441.23,-231.1 339.63,-231.1 339.63,-195.1 441.23,-195.1 441.23,-231.1"/>
<text xml:space="preserve" text-anchor="middle" x="390.43" y="-209.8" font-family="Helvetica,sans-Serif" font-size="11.00">Villa la Angostura</text>
</g>
<!-- CEMFN&#45;&gt;VLA -->
<g id="edge2" class="edge">
<title>CEMFN-&gt;VLA</title>
<path fill="none" stroke="#1a5276" stroke-width="2" d="M675.31,-271.73C595.85,-255.66 499.45,-236.16 441.62,-224.46"/>
</g>
<!-- JdLA -->
<g id="node4" class="node">
<title>JdLA</title>
<polygon fill="#d5f5e3" stroke="black" points="682.74,-231.1 570.12,-231.1 570.12,-195.1 682.74,-195.1 682.74,-231.1"/>
<text xml:space="preserve" text-anchor="middle" x="626.43" y="-209.8" font-family="Helvetica,sans-Serif" font-size="11.00">Junín de los Andes</text>
</g>
<!-- CEMFN&#45;&gt;JdLA -->
<g id="edge3" class="edge">
<title>CEMFN-&gt;JdLA</title>
<path fill="none" stroke="#1a5276" stroke-width="2" d="M741.69,-267.65C715.52,-255.49 686.46,-241.99 664.06,-231.59"/>
</g>
<!-- CHM -->
<g id="node5" class="node">
<title>CHM</title>
<polygon fill="#d5f5e3" stroke="black" points="843.94,-231.1 772.92,-231.1 772.92,-195.1 843.94,-195.1 843.94,-231.1"/>
<text xml:space="preserve" text-anchor="middle" x="808.43" y="-209.8" font-family="Helvetica,sans-Serif" font-size="11.00">Chos Malal</text>
</g>
<!-- CEMFN&#45;&gt;CHM -->
<g id="edge4" class="edge">
<title>CEMFN-&gt;CHM</title>
<path fill="none" stroke="#1a5276" stroke-width="2" d="M808.43,-267.65C808.43,-255.4 808.43,-241.78 808.43,-231.34"/>
</g>
<!-- ZAP -->
<g id="node6" class="node">
<title>ZAP</title>
<polygon fill="#d5f5e3" stroke="black" points="962.43,-231.1 908.43,-231.1 908.43,-195.1 962.43,-195.1 962.43,-231.1"/>
<text xml:space="preserve" text-anchor="middle" x="935.43" y="-209.8" font-family="Helvetica,sans-Serif" font-size="11.00">Zapala</text>
</g>
<!-- CEMFN&#45;&gt;ZAP -->
<g id="edge5" class="edge">
<title>CEMFN-&gt;ZAP</title>
<path fill="none" stroke="#1a5276" stroke-width="2" d="M855,-267.65C873.26,-255.49 893.55,-241.99 909.17,-231.59"/>
</g>
<!-- ALU -->
<g id="node7" class="node">
<title>ALU</title>
<polygon fill="#d5f5e3" stroke="black" points="1107.3,-231.1 1051.56,-231.1 1051.56,-195.1 1107.3,-195.1 1107.3,-231.1"/>
<text xml:space="preserve" text-anchor="middle" x="1079.43" y="-209.8" font-family="Helvetica,sans-Serif" font-size="11.00">Aluminé</text>
</g>
<!-- CEMFN&#45;&gt;ALU -->
<g id="edge6" class="edge">
<title>CEMFN-&gt;ALU</title>
<path fill="none" stroke="#1a5276" stroke-width="2" d="M907.42,-267.77C958.68,-251.78 1017.47,-233.44 1051.34,-222.87"/>
</g>
<!-- ActoresPrivados -->
<g id="node18" class="node">
<title>ActoresPrivados</title>
<polygon fill="#fad7a0" stroke="black" points="1428.38,-128.02 1428.38,-142.93 1375.11,-153.48 1299.76,-153.48 1246.48,-142.93 1246.48,-128.02 1299.76,-117.48 1375.11,-117.48 1428.38,-128.02"/>
<text xml:space="preserve" text-anchor="middle" x="1337.43" y="-131.28" font-family="Helvetica,sans-Serif" font-size="14.00">Actores Privados</text>
</g>
<!-- CEMFN&#45;&gt;ActoresPrivados -->
<g id="edge17" class="edge">
<title>CEMFN-&gt;ActoresPrivados</title>
<path fill="none" stroke="#8e44ad" stroke-width="2" d="M952.14,-273C1004.44,-262.13 1063.65,-248.02 1116.43,-231.1 1149.59,-220.47 1233.43,-183.49 1287.79,-159.03"/>
<polygon fill="#8e44ad" stroke="#8e44ad" stroke-width="2" points="1289.14,-162.26 1296.82,-154.96 1286.26,-155.88 1289.14,-162.26"/>
<text xml:space="preserve" text-anchor="middle" x="1263.76" y="-208.9" font-family="Times,serif" font-size="14.00">Colaboración Privada</text>
</g>
<!-- CMPP_SMdA -->
<g id="node8" class="node">
<title>CMPP_SMdA</title>
<ellipse fill="#fcf3cf" stroke="black" cx="60.43" cy="-135.48" rx="60.43" ry="22.63"/>
<text xml:space="preserve" text-anchor="middle" x="60.43" y="-138.48" font-family="Helvetica,sans-Serif" font-size="10.00">C.M.</text>
<text xml:space="preserve" text-anchor="middle" x="60.43" y="-126.43" font-family="Helvetica,sans-Serif" font-size="10.00">Policía (SMdA)</text>
</g>
<!-- SMdA&#45;&gt;CMPP_SMdA -->
<g id="edge7" class="edge">
<title>SMdA-&gt;CMPP_SMdA</title>
<path fill="none" stroke="black" d="M164.46,-194.75C146.21,-184.53 122.87,-171.45 102.92,-160.28"/>
<polygon fill="black" stroke="black" points="104.9,-157.37 94.46,-155.54 101.48,-163.48 104.9,-157.37"/>
</g>
<!-- PNL_SMdA -->
<g id="node9" class="node">
<title>PNL_SMdA</title>
<ellipse fill="#fadbd8" stroke="black" cx="195.43" cy="-135.48" rx="56.9" ry="22.63"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="195.43" y="-138.48" font-family="Helvetica,sans-Serif" font-size="10.00">P.N.</text>
<text xml:space="preserve" text-anchor="middle" x="195.43" y="-126.43" font-family="Helvetica,sans-Serif" font-size="10.00">Lanín (SMdA)</text>
</g>
<!-- SMdA&#45;&gt;PNL_SMdA -->
<g id="edge8" class="edge">
<title>SMdA-&gt;PNL_SMdA</title>
<path fill="none" stroke="black" d="M195.43,-194.94C195.43,-187.51 195.43,-178.55 195.43,-169.89"/>
<polygon fill="black" stroke="black" points="198.93,-169.97 195.43,-159.97 191.93,-169.97 198.93,-169.97"></polygon>
</g>
<!-- CMPP_VLA -->
<g id="node10" class="node">
<title>CMPP_VLA</title>
<ellipse fill="#fcf3cf" stroke="black" cx="324.43" cy="-135.48" rx="54.54" ry="22.63"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="324.43" y="-138.48" font-family="Helvetica,sans-Serif" font-size="10.00">C.M.</text>
<text xml:space="preserve" text-anchor="middle" x="324.43" y="-126.43" font-family="Helvetica,sans-Serif" font-size="10.00">Policía (VLA)</text>
</g>
<!-- VLA&#45;&gt;CMPP_VLA -->
<g id="edge9" class="edge">
<title>VLA-&gt;CMPP_VLA</title>
<path fill="none" stroke="black" d="M375.45,-194.94C367.87,-186.25 358.44,-175.45 349.77,-165.51"/>
<polygon fill="black" stroke="black" points="352.61,-163.44 343.39,-158.21 347.33,-168.04 352.61,-163.44"></polygon>
</g>
<!-- BR_JdLA -->
<g id="node11" class="node">
<title>BR_JdLA</title>
<ellipse fill="#ebdef0" stroke="black" cx="451.43" cy="-135.48" rx="54.55" ry="22.63"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="451.43" y="-138.48" font-family="Helvetica,sans-Serif" font-size="10.00">Brigada Rural</text>
<text xml:space="preserve" text-anchor="middle" x="451.43" y="-126.43" font-family="Helvetica,sans-Serif" font-size="10.00">JDLA</text>
</g>
<!-- JdLA&#45;&gt;BR_JdLA -->
<g id="edge10" class="edge">
<title>JdLA-&gt;BR_JdLA</title>
<path fill="none" stroke="black" d="M586.28,-194.75C560.27,-183.51 526.27,-168.82 498.91,-157"/>
<polygon fill="black" stroke="black" points="500.36,-153.81 489.8,-153.06 497.59,-160.24 500.36,-153.81"></polygon>
</g>
<!-- BB_JdLA -->
<g id="node12" class="node">
<title>BB_JdLA</title>
<ellipse fill="#fadbd8" stroke="black" cx="567.43" cy="-135.48" rx="43.54" ry="22.63"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="567.43" y="-138.48" font-family="Helvetica,sans-Serif" font-size="10.00">Bomberos</text>
<text xml:space="preserve" text-anchor="middle" x="567.43" y="-126.43" font-family="Helvetica,sans-Serif" font-size="10.00">JDLA</text>
</g>
<!-- JdLA&#45;&gt;BB_JdLA -->
<g id="edge11" class="edge">
<title>JdLA-&gt;BB_JdLA</title>
<path fill="none" stroke="black" d="M613.04,-194.94C606.28,-186.27 597.88,-175.5 590.14,-165.58"/>
<polygon fill="black" stroke="black" points="593.12,-163.71 584.21,-157.98 587.6,-168.02 593.12,-163.71"></polygon>
</g>
<!-- PNL_JdLA -->
<g id="node13" class="node">
<title>PNL_JdLA</title>
<ellipse fill="#fadbd8" stroke="black" cx="682.43" cy="-135.48" rx="53.76" ry="22.63"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="682.43" y="-138.48" font-family="Helvetica,sans-Serif" font-size="10.00">P.N.</text>
<text xml:space="preserve" text-anchor="middle" x="682.43" y="-126.43" font-family="Helvetica,sans-Serif" font-size="10.00">Lanín (JdLA)</text>
</g>
<!-- JdLA&#45;&gt;PNL_JdLA -->
<g id="edge12" class="edge">
<title>JdLA-&gt;PNL_JdLA</title>
<path fill="none" stroke="black" d="M639.14,-194.94C645.29,-186.64 652.85,-176.42 659.93,-166.86"/>
<polygon fill="black" stroke="black" points="662.74,-168.96 665.87,-158.84 657.11,-164.79 662.74,-168.96"></polygon>
</g>
<!-- OF_CHM -->
<g id="node14" class="node">
<title>OF_CHM</title>
<ellipse fill="#ebdef0" stroke="black" cx="808.43" cy="-135.48" rx="54.14" ry="22.63"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="808.43" y="-138.48" font-family="Helvetica,sans-Serif" font-size="10.00">Oficina</text>
<text xml:space="preserve" text-anchor="middle" x="808.43" y="-126.43" font-family="Helvetica,sans-Serif" font-size="10.00">Fauna (CHM)</text>
</g>
<!-- CHM&#45;&gt;OF_CHM -->
<g id="edge13" class="edge">
<title>CHM-&gt;OF_CHM</title>
<path fill="none" stroke="black" d="M808.43,-194.94C808.43,-187.51 808.43,-178.55 808.43,-169.89"/>
<polygon fill="black" stroke="black" points="811.93,-169.97 808.43,-159.97 804.93,-169.97 811.93,-169.97"></polygon>
</g>
<!-- CMPP_ZAP -->
<g id="node15" class="node">
<title>CMPP_ZAP</title>
<ellipse fill="#fcf3cf" stroke="black" cx="935.43" cy="-135.48" rx="54.93" ry="22.63"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="935.43" y="-138.48" font-family="Helvetica,sans-Serif" font-size="10.00">C.M.</text>
<text xml:space="preserve" text-anchor="middle" x="935.43" y="-126.43" font-family="Helvetica,sans-Serif" font-size="10.00">Policía (ZAP)</text>
</g>
<!-- ZAP&#45;&gt;CMPP_ZAP -->
<g id="edge14" class="edge">
<title>ZAP-&gt;CMPP_ZAP</title>
<path fill="none" stroke="black" d="M935.43,-194.94C935.43,-187.51 935.43,-178.55 935.43,-169.89"/>
<polygon fill="black" stroke="black" points="938.93,-169.97 935.43,-159.97 931.93,-169.97 938.93,-169.97"></polygon>
</g>
<!-- VP_ZAP -->
<g id="node16" class="node">
<title>VP_ZAP</title>
<ellipse fill="#fadbd8" stroke="black" cx="1056.43" cy="-135.48" rx="48.24" ry="22.63"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="1056.43" y="-138.48" font-family="Helvetica,sans-Serif" font-size="10.00">Vialidad</text>
<text xml:space="preserve" text-anchor="middle" x="1056.43" y="-126.43" font-family="Helvetica,sans-Serif" font-size="10.00">Prov. (ZAP)</text>
</g>
<!-- ZAP&#45;&gt;VP_ZAP -->
<g id="edge15" class="edge">
<title>ZAP-&gt;VP_ZAP</title>
<path fill="none" stroke="black" d="M962.89,-194.94C979.36,-184.65 1000.55,-171.4 1018.59,-160.13"></path>
<polygon fill="black" stroke="black" points="1020.34,-163.16 1026.96,-154.9 1016.63,-157.23 1020.34,-163.16"></polygon>
</g>
<!-- OF_ALU -->
<g id="node17" class="node">
<title>OF_ALU</title>
<ellipse fill="#ebdef0" stroke="black" cx="1174.43" cy="-135.48" rx="51.79" ry="22.63"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="1174.43" y="-138.48" font-family="Helvetica,sans-Serif" font-size="10.00">Oficina</text>
<text xml:space="preserve" text-anchor="middle" x="1174.43" y="-126.43" font-family="Helvetica,sans-Serif" font-size="10.00">Fauna (ALU)</text>
</g>
<!-- ALU&#45;&gt;OF_ALU -->
<g id="edge16" class="edge">
<title>ALU-&gt;OF_ALU</title>
<path fill="none" stroke="black" d="M1100.99,-194.94C1112.91,-185.45 1127.97,-173.46 1141.35,-162.81"></path>
<polygon fill="black" stroke="black" points="1143.46,-165.61 1149.1,-156.64 1139.1,-160.13 1143.46,-165.61"></polygon>
</g>
<!-- CasaTe -->
<g id="node19" class="node">
<title>CasaTe</title>
<ellipse fill="#fcf3cf" stroke="black" cx="752.43" cy="-51.52" rx="87.43" ry="18"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="752.43" y="-48.22" font-family="Helvetica,sans-Serif" font-size="11.00">Casa de Té Arrayán SMA</text>
</g>
<!-- ActoresPrivados&#45;&gt;CasaTe -->
<g id="edge18" class="edge">
<title>ActoresPrivados-&gt;CasaTe</title>
<path fill="none" stroke="#8e44ad" d="M1279.65,-121.04C1265.27,-118.02 1249.83,-115.06 1235.43,-112.85 1065.08,-86.71 1019.41,-104.29 849.43,-75.85 834.65,-73.38 818.79,-69.91 804.26,-66.41"></path>
</g>
<!-- ParadorLolog -->
<g id="node20" class="node">
<title>ParadorLolog</title>
<ellipse fill="#fcf3cf" stroke="black" cx="927.43" cy="-51.52" rx="69.29" ry="18"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="927.43" y="-48.22" font-family="Helvetica,sans-Serif" font-size="11.00">Parador Lolog SMA</text>
</g>
<!-- ActoresPrivados&#45;&gt;ParadorLolog -->
<g id="edge19" class="edge">
<title>ActoresPrivados-&gt;ParadorLolog</title>
<path fill="none" stroke="#8e44ad" d="M1277.93,-121.35C1264.01,-118.42 1249.22,-115.42 1235.43,-112.85 1134.08,-93.93 1106.96,-98.71 1006.43,-75.85 994.44,-73.12 981.59,-69.59 969.81,-66.11"></path>
</g>
<!-- Comunidad -->
<g id="node21" class="node">
<title>Comunidad</title>
<ellipse fill="#ebdef0" stroke="black" cx="1100.43" cy="-51.52" rx="85.25" ry="24.32"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="1100.43" y="-54.82" font-family="Helvetica,sans-Serif" font-size="11.00">Comunidad Mapuche</text>
<text xml:space="preserve" text-anchor="middle" x="1100.43" y="-41.62" font-family="Helvetica,sans-Serif" font-size="11.00">Linares (Huiliches)</text>
</g>
<!-- ActoresPrivados&#45;&gt;Comunidad -->
<g id="edge20" class="edge">
<title>ActoresPrivados-&gt;Comunidad</title>
<path fill="none" stroke="#8e44ad" d="M1291.74,-118.68C1252.19,-105 1194.98,-85.22 1153.43,-70.85"></path>
</g>
<!-- ParadorMeli -->
<g id="node22" class="node">
<title>ParadorMeli</title>
<ellipse fill="#fcf3cf" stroke="black" cx="1268.43" cy="-51.52" rx="65.13" ry="18"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="1268.43" y="-48.22" font-family="Helvetica,sans-Serif" font-size="11.00">Parador Meliquina</text>
</g>
<!-- ActoresPrivados&#45;&gt;ParadorMeli -->
<g id="edge21" class="edge">
<title>ActoresPrivados-&gt;ParadorMeli</title>
<path fill="none" stroke="#8e44ad" d="M1322.8,-117.1C1310.93,-103 1294.3,-83.25 1282.57,-69.32"></path>
</g>
<!-- ClubGolf -->
<g id="node23" class="node">
<title>ClubGolf</title>
<ellipse fill="#fcf3cf" stroke="black" cx="1406.43" cy="-51.52" rx="54.9" ry="18"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="1406.43" y="-48.22" font-family="Helvetica,sans-Serif" font-size="11.00">Club Golf SMA</text>
</g>
<!-- ActoresPrivados&#45;&gt;ClubGolf -->
<g id="edge22" class="edge">
<title>ActoresPrivados-&gt;ClubGolf</title>
<path fill="none" stroke="#8e44ad" d="M1352.06,-117.1C1363.93,-103 1380.56,-83.25 1392.29,-69.32"></path>
</g>
<!-- ClubDesafio -->
<g id="node24" class="node">
<title>ClubDesafio</title>
<ellipse fill="#fcf3cf" stroke="black" cx="1555.43" cy="-51.52" rx="75.71" ry="18"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="1555.43" y="-48.22" font-family="Helvetica,sans-Serif" font-size="11.00">Club El Desafío SMA</text>
</g>
<!-- ActoresPrivados&#45;&gt;ClubDesafio -->
<g id="edge23" class="edge">
<title>ActoresPrivados-&gt;ClubDesafio</title>
<path fill="none" stroke="#8e44ad" d="M1380.76,-118.19C1420.25,-103.34 1478.07,-81.61 1516.21,-67.27"></path>
</g>
<!-- HosteriaBoca -->
<g id="node25" class="node">
<title>HosteriaBoca</title>
<ellipse fill="#fcf3cf" stroke="black" cx="1757.43" cy="-51.52" rx="107.86" ry="18"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="1757.43" y="-48.22" font-family="Helvetica,sans-Serif" font-size="11.00">Hostería Boca Chimehuin JDLA</text>
</g>
<!-- ActoresPrivados&#45;&gt;HosteriaBoca -->
<g id="edge24" class="edge">
<title>ActoresPrivados-&gt;HosteriaBoca</title>
<path fill="none" stroke="#8e44ad" d="M1401.29,-122.23C1462.63,-110.44 1557.89,-92.06 1640.43,-75.85 1656.59,-72.68 1673.99,-69.22 1690.31,-65.97"></path>
</g>
<!-- CerroBayo -->
<g id="node26" class="node">
<title>CerroBayo</title>
<ellipse fill="#fcf3cf" stroke="black" cx="1942.43" cy="-51.52" rx="59.07" ry="18"></ellipse>
<text xml:space="preserve" text-anchor="middle" x="1942.43" y="-48.22" font-family="Helvetica,sans-Serif" font-size="11.00">Cerro Bayo VLA</text>
</g>
<!-- ActoresPrivados&#45;&gt;CerroBayo -->
<g id="edge25" class="edge">
<title>ActoresPrivados-&gt;CerroBayo</title>
<path fill="none" stroke="#8e44ad" d="M1428.7,-130.68C1536.36,-124.78 1720.2,-110.27 1874.43,-75.85 1885.27,-73.43 1896.79,-69.87 1907.21,-66.26"></path>
</g>
<!-- NODO_CENTRAL_INVIS -->
<g id="node27" class="node">
<title>NODO_CENTRAL_INVIS</title>
<polygon fill="lightgrey" stroke="none" points="1338.79,-213.82 1338.07,-213.82 1338.07,-212.38 1338.79,-212.38 1338.79,-213.82"></polygon>
</g>
<!-- NODO_CENTRAL_INVIS&#45;&gt;ActoresPrivados -->
</g>
</svg>
`;

const CentroMonitoreos = () => {
  return (
    <div className="centro-monitoreos-container">
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      <div className="logos-container">
        <img src="/Logos/image-removebg-preview.png" alt="Logo 1" className="logo-img" />
        <img src="/Logos/image-removebg-preview (1).png" alt="Logo 2" className="logo-img" />
        <img src="/Logos/image-removebg-preview (2).png" alt="Logo 3" className="logo-img" />
        <img src="/Logos/fauna-removebg-preview.png" alt="Logo 4" className="logo-img" />
        <img src="/Logos/image-removebg-preview (3).png" alt="Logo 5" className="logo-img" />
        <img src="/Logos/image-removebg-preview (4).png" alt="Logo 6" className="logo-img" />
      </div>
    </div>
  );
};

export default CentroMonitoreos;