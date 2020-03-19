import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
import XAxis from 'recharts/lib/cartesian/XAxis';
import Tooltip from 'recharts/lib/component/Tooltip';
import { withTheme } from '@material-ui/styles';

function SimpleLineChart(props) {
  const { theme, data } = props;
  return (
    <ResponsiveContainer width="99%" height={225}>
      <BarChart data={data}>
        <XAxis dataKey="estado"/>
        <Tooltip/>
        <Bar dataKey="qtd" stackId="a" fill={theme.palette.primary.main} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default withTheme(SimpleLineChart);