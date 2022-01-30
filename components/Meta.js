import Head from "next/head";


const Meta = ({keywords, description ,title}) => {
  return (
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="IE=7" />
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="keywords" content={keywords} />
          <meta name="description" content={description} />
          <title>{title}</title>

          
      </Head>

  );
};

Meta.defaultProps = {
    keywords:'dota2 heroes',
    description: 'heroes detail',
    title: 'Dota 2 Heroes'
}

export default Meta;
