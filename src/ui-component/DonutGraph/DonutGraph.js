import React from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import './styles.modules.css';
import { useEffect } from 'react';

export default function DonutGraph(props) {
  const { data, title, id } = props;
  useEffect(() => {
    if (data?.length > 0) {
      // Create root element
      var root = am5.Root.new(id);
      // Set themes
      root.setThemes([am5themes_Animated.new(root)]);
      // Create chart
      var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          layout: root.verticalLayout,
          innerRadius: am5.percent(80), // Adjust the inner radius to decrease thickness
          outerRadius: am5.percent(20)
        })
      );
      // Create series
      var series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: 'value',
          categoryField: 'category',
          fillField: 'fill',
          alignLabels: false
        })
      );

      // series.labels.template.set('hideOversized', true);
      // series.labels.template.set('label', { disabled: true });
      // series.labels.template.set('visible', false);
      series.slices.template.set('strokeWidth', 2);
      series.hideTooltip();

      series.labels.template.setAll({
        textType: 'circular',
        centerX: 0,
        centerY: 0,
        visible: false
      });
      // Set data
      series.data.setAll(data);
      // Create legend

      series.appear(1000, 100);
    }
    return () => {
      // Clean up the chart when the component unmounts
      chart?.dispose();
    };
  }, [data]);
  return (
    <div className="chartMain">
      <div>
        <p className="chartTitle">{title}</p>

        <div id={id} className="chartdiv" />
      </div>
      <div className="legendsMain">
        {data.map((item, index) => (
          <div key={index} className="legend">
            <p className="legendValue" style={{ backgroundColor: item.color }}>
              {item.value}
            </p>
            <p className="legendTitle">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
