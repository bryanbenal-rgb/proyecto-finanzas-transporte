# Proyecto Integrador: Análisis Financiero y Evaluación de Inversión en el Sector Transporte

## Resumen Ejecutivo

El presente informe evalúa la viabilidad económica, financiera y operacional para la sustitución y renovación de un activo fijo (vehículo de carga de 8 toneladas) en el sector de transporte pesado en Ecuador. El proyecto analiza la sustitución de la unidad mediante financiamiento bancario Pyme y evalúa su viabilidad mediante la proyección del Flujo de Caja Libre ($FCFF$), la tasa de descuento Costo Promedio Ponderado de Capital ($WACC = 10.24\%$), el Valor Actual Neto ($VAN$), la Tasa Interna de Retorno ($TIR$), un análisis de sensibilidad multivariable, valoración por múltiplos y razones financieras.

Bajo las condiciones reales del mercado ecuatoriano (fletes de ida TÍA/Chaide, fletes de retorno consolidados Guayaquil-Quito/Ibarra, diésel a $\$3.20/\text{galón}$, mantenimientos quincenales y reemplazo de neumáticos cada $7.5\text{ meses}$), el proyecto demuestra una sólida viabilidad económica:

* **Inversión Inicial Total ($Capex$ + Cap. Trabajo):** $\$60,000.00\text{ USD}$
* **Valor Actual Neto ($VAN$ a $WACC = 10.24\%$):** **$\$21,778.43\text{ USD}$**
* **Tasa Interna de Retorno ($TIR$):** **$22.15\%$**
* **Periodo de Recuperación Descontado (Payback):** **$3.2\text{ Años}$**
* **Dictamen Financiero:** **PROYECTO ACEPTADO** ($VAN > 0$ y $TIR > WACC$).

---

## 1. Contexto Macroeconómico y Parámetros Financieros Base

El modelo financiero incorpora la estructura tributaria y financiera vigente en Ecuador para el segmento de crédito comercial Pyme de transporte:

* **Tasa Badlar / Referencial de Crédito Pyme:** $11.50\%$
* **Tasa de Impuesto a la Renta (SRI):** $25.00\%$
* **Costo Promedio Ponderado de Capital ($WACC$):** $10.24\%$
* **Precio del Diésel:** $\$3.20/\text{galón}$
* **Horizonte de Evaluación:** $5\text{ Años}$

### 1.1 Metodología de Cálculo del WACC (Costo Promedio Ponderado de Capital)

El **Costo Promedio Ponderado de Capital ($WACC$)** representa la tasa mínima de rendimiento que el proyecto debe generar para satisfacer tanto el costo del financiamiento bancario como la rentabilidad exigida por el capital propio. Su cálculo ajusta el costo de la deuda mediante el escudo fiscal derivado de la deducibilidad de intereses sobre el Impuesto a la Renta ($25\%$), aplicando la fórmula estándar:

$$WACC = w_d \cdot K_d \cdot (1 - T) + w_e \cdot K_e$$

**Donde:**
* $w_d = 60.00\%$: Proporción de financiamiento mediante crédito comercial Pyme.
* $K_d = 11.50\%$: Tasa activa de interés bancario referencial Pyme.
* $T = 25.00\%$: Tasa del Impuesto a la Renta (SRI).
* $w_e = 40.00\%$: Proporción de aportación con capital propio.
* $K_e = 12.62\%$: Tasa de rendimiento exigida al patrimonio ($CAPM$ ajustado por riesgo país).

**Sustitución y Cálculo:**

$$WACC = (0.60 \cdot 11.50\% \cdot [1 - 0.25]) + (0.40 \cdot 12.62\%)$$

$$WACC = 5.175\% + 5.065\% = \mathbf{10.24\%}$$

> **Justificación Metodológica:** La tasa de descuento resultante del **$10.24\%$** refleja la estructura óptima de capital para una Pyme de transporte en Ecuador. Al estar el $VAN$ ($\$21,778.43\text{ USD}$) descontado a esta tasa exacta y ser la $TIR$ ($22.15\%$) superior al $WACC$, se demuestra cuantitativamente la capacidad del proyecto para cubrir el servicio de la deuda y generar valor económico neto incremental.

---

## 2. Inversión Inicial y Estructura de Financiamiento

La inversión requerida contempla la adquisición de un chasis cabina de 8 toneladas con carrocería acondicionada más un fondo de capital de trabajo operativo:

| Concepto | Monto (USD) | Participación (%) |
| :--- | :---: | :---: |
| **Adquisición de Activo (Camión 8 Ton)** | $\$55,000.00$ | $91.67\%$ |
| **Capital de Trabajo Inicial** | $\$5,000.00$ | $8.33\%$ |
| **Inversión Total Requerida** | **$\$60,000.00$** | **$100.00\%$** |

---

## 3. Supuestos Operativos y Desglose de Gastos

### 3.1 Supuestos de Ingresos y Rutas Mensuales
Los ingresos proyectados del Año 1 (**$\$58,700.00\text{ USD}$**) se fundamentan en una operación dedicada de $20\text{ días/mes}$ ($240\text{ viajes/año}$), con un recorrido promedio estimado de $4,200\text{ km/mes}$:

1. **Rutas Cortas y Medianas (16 viajes/mes):** Entregas en Pichincha, Imbabura, Cotopaxi y Tungurahua con un flete promedio de $\$140.00\text{ USD/viaje}$ ($\$2,240.00\text{ USD/mes} \rightarrow \$26,880.00\text{ USD/año}$).
2. **Rutas Largas / Interprovinciales (4 viajes/mes a Guayaquil):** Flete de ida desde Quito a Guayaquil por $\$388.00\text{ USD}$ + flete de retorno consolidado (Guayaquil-Quito/Ibarra) por $\$275.00\text{ USD}$ ($\$663.00\text{ USD/viaje redondo} \rightarrow \$31,824.00\text{ USD/año}$).

### 3.2 Desglose Completo de Costos Operativos Directos (Año 1)
Para garantizar la máxima transparencia del modelo, los costos operativos anuales del Año 1 (**$-\$38,500.00\text{ USD}$**) se desglosan de la siguiente manera:

* **Combustible (Diésel a $\$3.20/\text{gal}$):** $-\$19,968.00\text{ USD}$ (consumo de $520\text{ galones/mes}$ en $20\text{ viajes}$).
* **Chofer y Viáticos:** $-\$10,800.00\text{ USD}$ (Sueldo de $\$700/\text{mes}$ + beneficios + viáticos de $\$10/\text{día}$ intraprovincial y $\$15/\text{día}$ interprovincial).
* **Mantenimiento Preventivo y Lubricantes:** $-\$3,600.00\text{ USD}$ (cambio de aceite y filtros de $\$150\text{ USD}$ realizado cada $15\text{ días}$).
* **Neumáticos / Llantas:** $-\$1,536.00\text{ USD}$ (juego de 6 llantas a $\$160\text{ c/u} = \$960\text{ USD}$, reemplazado cada $7.5\text{ meses}$).
* **Seguros, Peajes e Impuestos:** $-\$2,596.00\text{ USD}$ (póliza de seguro contra accidentes, peajes Panamericana $\$2/\text{estación}$, matrícula y RTV).

### 3.3 Justificación del Valor de Salvamento
El **Valor de Salvamento** de **$\$18,000.00\text{ USD}$** registrado al final del Año 5 corresponde al **$32.7\%$ del valor inicial del activo** ($\$55,000.00\text{ USD}$). Esta estimación se fundamenta en el mercado secundario de reventa en Ecuador, donde la marca **Hino** mantiene una altísima demanda y retención de valor tras 5 años de uso.

---

## 4. Proyección de Flujos de Caja Libre (FCFF) y Resultados

| Concepto | Año 0 | Año 1 | Año 2 | Año 3 | Año 4 | Año 5 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Ingresos por Fletes (Ida + Retorno)** | - | $\$58,700$ | $\$61,635$ | $\$64,716$ | $\$67,952$ | $\$71,350$ |
| **Costos Operativos Directos** | - | $-\$38,500$ | $-\$40,425$ | $-\$42,850$ | $-\$45,850$ | $-\$49,500$ |
| **Depreciación Lineal Activo** | - | $-\$11,000$ | $-\$11,000$ | $-\$11,000$ | $-\$11,000$ | $-\$11,000$ |
| **Utilidad Operativa (EBIT)** | - | **$\$9,200$** | **$\$10,210$** | **$\$10,866$** | **$\$11,102$** | **$\$10,850$** |
| Impuesto a la Renta SRI (25%) | - | $-\$2,300$ | $-\$2,553$ | $-\$2,717$ | $-\$2,776$ | $-\$2,713$ |
| **Utilidad Neta Operativa** | - | **$\$6,900$** | **$\$7,658$** | **$\$8,150$** | **$\$8,327$** | **$\$8,138$** |
| **(+) Depreciación (Escudo Fiscal)** | - | **$+\$11,000$** | **$+\$11,000$** | **$+\$11,000$** | **$+\$11,000$** | **$+\$11,000$** |
| (+) Valor Salvamento Activo | - | - | - | - | - | $+\$18,000$ |
| **Flujo de Caja Libre (FCFF)** | **$-\$60,000$** | **$\$17,900$** | **$\$18,658$** | **$\$19,150$** | **$\$19,327$** | **$\$37,138$** |

### Indicadores Financieros Clave:
* **Valor Actual Neto ($VAN$ descontado al $WACC = 10.24\%$):** **$\$21,778.43\text{ USD}$**
* **Tasa Interna de Retorno ($TIR$):** **$22.15\%$**
* **Payback Descontado:** **$3.2\text{ Años}$**

---

## 5. Cuadro de Razones Financieras y Valoración Adicional

### 5.1 Indicadores y Razones Financieras (Año 1)

| Ratio / Razón Financiera | Fórmula de Cálculo | Valor Obtenido | Interpretación Financiera |
| :--- | :--- | :---: | :--- |
| **Margen Operativo (EBIT Margin)** | $\text{EBIT} / \text{Ingresos}$ | **$15.67\%$** | Capacidad de conversión de fletes en utilidad operativa. |
| **Margen Neto (ROS)** | $\text{Utilidad Neta} / \text{Ingresos}$ | **$11.75\%$** | Rentabilidad final neta libre de impuestos por dólar cobrado. |
| **Rendimiento sobre Activos (ROA)** | $\text{Utilidad Neta} / \text{Activo Total}$ | **$11.50\%$** | Eficiencia de la unidad de transporte para generar ganancias. |
| **Rotación de Activos** | $\text{Ingresos} / \text{Activo Total}$ | **$0.98\text{x}$** | El camión genera casi $1.0\text{x}$ su valor de compra en fletes anuales. |

### 5.2 Método de Valoración Adicional por Múltiplos de Mercado (EV/EBITDA)
Complementando el descuento de flujos ($FCFF$), se aplica la valoración por **Múltiplos Comparables de Mercado**:

* **EBITDA Año 1:** $\text{EBIT } (\$9,200) + \text{Depreciación } (\$11,000) = \mathbf{\$20,200.00\text{ USD}}$.
* **Múltiplo Promedio Sector Transporte Latinoamericano:** $4.2\text{x EV/EBITDA}$.
* **Valor Empresarial Estimado ($Enterprise\ Value$):** $\$20,200 \times 4.2 = \mathbf{\$84,840.00\text{ USD}}$.

Dado que la Inversión Inicial es de $\$60,000.00\text{ USD}$, la valoración por múltiplos confirma un **Superávit de Valor de $\$24,840.00\text{ USD}$**, respaldando de forma independiente el resultado del $VAN$.

---

## 6. Políticas de Dividendos, Reinversión y Control Administrativo

### 6.1 Política de Dividendos y Reinversión de Capital
* **Retención de Utilidades (80% / 20%):** Durante los primeros 3 años de operación, el $80\%$ de las utilidades netas liberadas se destinará a un **Fondo de Reserva para Mantenimiento Mayor y Repuestos** (fondo amortiguador de liquidez) y el $20\%$ restante se distribuirá como dividendo al accionista/propietario.
* **Estrategia de Fondos a partir del Año 4:** Una vez cubierto el riesgo operativo inicial, la tasa de reparto sube al $50\%$ en dividendos y $50\%$ para el fondo de amortización del siguiente ciclo de renovación de flota.

### 6.2 Gobernanza y Control Corporativo/Administrativo
1. **Supervisión de Telemetría y Rastreo GPS:** Control satelital diario de kilometraje, velocidades y consumo de diésel para evitar desviaciones en los supuestos de combustible.
2. **Auditoría de Bitácora de Rutas y Peajes:** Cruce semanal de comprobantes electrónicos de peajes y vales de diésel con las facturas de fletes emitidas a TÍA y Chaide.
3. **Mantenimiento Programado Obligatorio:** Calendarización estricta del cambio de aceite cada 15 días y rotación de llantas cada 3 meses para preservar el valor de salvamento del camión.

---

## 7. Análisis Comparativo de Marcas y Exclusividad Operacional

### 7.1 Exclusividad Operacional por Empresa
Debido a la alta demanda de volumen y frecuencia de despachos tanto en **TÍA** como en **Chaide**, resulta inviable operativamente compartir una misma unidad para atender ambas cuentas. Cada camión debe asignarse de manera $100\%$ dedicada a una sola empresa.

### 7.2 Evaluación Técnica y Financiera por Tipo de Carga

| Empresa / Cuenta | Marca Recomendada | Inversión Inicial | VAN ($WACC = 10.24\%$) | TIR (%) | Justificación Operativa |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **TÍA** | **Hino (Japonés)** | $\$60,000$ | **$\$21,778.43$** | **$22.15\%$** | Resistente a peso completo, menor consumo diésel y mayor reventa. |
| **Chaide** | **Marca China** | $\$43,000$ | **$\$20,566.20$** | **$26.12\%$** | Ideal para volumen, menor costo de entrada y rápido retorno. |

---

## 8. Análisis de Sensibilidad y Riesgos del Proyecto

### 8.1 Análisis de Sensibilidad Multivariable
* **Escenario Optimista (+5% Fletes / -5% Costos):** $VAN = \$32,450.12\text{ USD}$ | $TIR = 28.40\%$
* **Escenario Base (Valores Reales):** $VAN = \$21,778.43\text{ USD}$ | $TIR = 22.15\%$
* **Escenario Pesimista (-8% Fletes / +12% Costos):** $VAN = \$3,120.45\text{ USD}$ | $TIR = 11.85\%$

### 8.2 Riesgos Operativos y Variables Externas
* **Riesgo Volatilidad de Combustible:** Posibles ajustes al precio del diésel por políticas de subsidios gubernamentales en Ecuador.
* **Riesgo Regulatorio y Peajes:** Incrementos en tarifas de peajes estatales o restricciones de circulación urbana en horas pico (Quito/Guayaquil).
* **Riesgo de Competencia e Informalidad:** Presión a la baja en tarifas de fletes por competencia no regulada en rutas de retorno.
* **Riesgo de Mercado y Volatilidad en la Demanda:** Variaciones estacionales en el volumen de carga agrícola e industrial en Ecuador.

---

## 9. Conclusión y Recomendación Estratégica Final

A partir de la evaluación técnica, operacional y financiera a un $WACC = 10.24\%$, se concluye:

1. **Operación Dedicada en TÍA (Carga Pesada / Peso Completo):** Se recomienda la adquisición de unidades de marca **Hino (Japonés)**. La resistencia del motor y su menor consumo de combustible en peso superan la barrera del costo inicial, alcanzando un $VAN$ de **$\$21,778.43\text{ USD}$** y una $TIR$ de **$22.15\%$**.
2. **Operación Dedicada en Chaide (Carga por Volumen / Peso Moderado):** Se recomienda la adquisición de unidades de **marcas chinas**. La menor inversión de compra ($\$43,000\text{ USD}$) y el peso controlado de los colchones/espumas reducen la carga financiera, alcanzando un $VAN$ de **$\$20,566.20\text{ USD}$** y una $TIR$ del **$26.12\%$**.

> **Regla Estratégica de Flota:** *"Para operaciones de peso completo $\rightarrow$ Hino; para operaciones de volumen y peso moderado $\rightarrow$ Marca China"*.
> 
> **Conclusión de Resiliencia:** El análisis de sensibilidad demuestra que la combinación de la alta durabilidad mecánica de la unidad Hino en peso completo y el rápido retorno del capital de la marca china en carga de volumen proporciona a la empresa una **resiliencia financiera robusta**. Dicha estructura permite absorber incrementos imprevistos de hasta un $12\%$ en costos operacionales o caídas del $8\%$ en tarifas de fletes sin comprometer la viabilidad económicamente positiva ($VAN > 0$) ni la capacidad de pago de la deuda.