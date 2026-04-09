export const skills = {
  cloud: [
    'Google Cloud Platform (GCP)',
    'BigQuery',
    'Cloud Composer',
    'Cloud Storage',
    'Dataproc',
    'Cloud Functions',
    'Pub/Sub',
  ],
  processing: [
    'Apache Spark',
    'DuckDB',
    'Apache Iceberg',
    'Presto/Trino',
    'Apache Airflow',
    'dbt',
  ],
  automation: [
    'GitLab CI/CD',
    'Terraform',
    'Docker',
    'Kubernetes',
    'Argo Workflows',
    'GitHub Actions',
  ],
};

export const projects = [
  {
    title: 'Spark on Kubernetes with Argo Workflows',
    description:
      'Designed and implemented a scalable data processing pipeline using Spark on Kubernetes orchestrated by Argo Workflows. Achieved 60% cost reduction compared to traditional Dataproc clusters while maintaining sub-hour SLAs for critical ETL jobs. Implemented dynamic resource allocation and automated job retries with exponential backoff.',
    techStack: [
      'Apache Spark',
      'Kubernetes',
      'Argo Workflows',
      'Python',
      'Helm',
      'GCS',
      'BigQuery',
    ],
    architecture: [
      'Event-driven architecture with Pub/Sub triggers',
      'Horizontal pod autoscaling based on queue depth',
      'Spot instance utilization for cost optimization',
      'Centralized logging with Cloud Logging',
    ],
    github: '#',
    external: '#',
  },
  {
    title: 'BigQuery Data Lakehouse Architecture',
    description:
      'Built a unified data lakehouse on GCP combining BigQuery and Cloud Storage with Apache Iceberg tables. Enabled ACID transactions on data lake files while maintaining compatibility with Spark, Presto, and BigQuery compute engines. Reduced query costs by 40% through intelligent data partitioning and clustering.',
    techStack: ['BigQuery', 'Apache Iceberg', 'Cloud Storage', 'Dataproc', 'Spark', 'Terraform'],
    architecture: [
      'Medallion architecture (Bronze/Silver/Gold layers)',
      'Time-travel capabilities with Iceberg snapshots',
      'Schema evolution without downtime',
      'Multi-engine query federation',
    ],
    github: '#',
    external: '#',
  },
  {
    title: 'Real-time Analytics Pipeline with Dataproc',
    description:
      'Developed a near-real-time analytics platform processing 50TB+ daily data streams. Leveraged Dataproc serverless for Spark jobs with autoscaling and integrated with BigQuery for ad-hoc analysis. Implemented data quality checks and monitoring dashboards.',
    techStack: ['Dataproc', 'Spark Streaming', 'Kafka', 'BigQuery', 'Dataflow', 'Looker'],
    architecture: [
      'Lambda architecture for batch and stream processing',
      'Exactly-once semantics with idempotent writes',
      'Late-arriving data handling with watermarks',
      'Custom metrics and alerting with Cloud Monitoring',
    ],
    github: '#',
    external: '#',
  },
  {
    title: 'DuckDB-Powered Analytics Engine',
    description:
      'Created a lightweight analytics engine using DuckDB for local data exploration and rapid prototyping before scaling to cloud infrastructure. Integrated with Parquet files on GCS for seamless data access. Reduced analyst iteration time from hours to minutes.',
    techStack: ['DuckDB', 'Python', 'Parquet', 'FastAPI', 'Cloud Storage', 'Metabase'],
    architecture: [
      'Columnar storage with Parquet format',
      'Push-down predicate filtering',
      'Zero-copy integration with Pandas/Polars',
      'REST API for query execution',
    ],
    github: '#',
    external: '#',
  },
];

export const systemDesigns = [
  {
    title: 'Multi-Cloud Data Mesh Architecture',
    description:
      'Designed a decentralized data architecture following data mesh principles. Each domain team owns their data products with standardized interfaces. Central governance ensures data quality and discoverability across GCP and on-premise systems.',
    components: [
      'Domain-oriented data products',
      'Self-serve data infrastructure platform',
      'Federated computational governance',
      'Data product metadata catalog',
    ],
    tools: ['BigQuery', 'Dataplex', 'Data Catalog', 'Cloud Composer', 'Terraform'],
  },
  {
    title: 'Event-Driven Data Pipeline',
    description:
      'Architected an event-driven system using Pub/Sub as the central message bus. Decoupled data producers and consumers enabling independent scaling and deployment. Implemented dead-letter queues and circuit breakers for fault tolerance.',
    components: [
      'Event schemas with Avro/Protobuf',
      'Asynchronous processing with Cloud Functions',
      'State management with Firestore',
      'Event replay capabilities',
    ],
    tools: ['Pub/Sub', 'Cloud Functions', 'Dataflow', 'BigQuery', 'Cloud Run'],
  },
  {
    title: 'CI/CD for Data Pipelines',
    description:
      'Established GitOps practices for data pipeline development. Infrastructure as code with Terraform, automated testing with pytest and great_expectations, and progressive rollouts with canary deployments. Reduced production incidents by 75%.',
    components: [
      'Git-based version control for all artifacts',
      'Automated integration and unit tests',
      'Data quality validation gates',
      'Blue-green deployment strategy',
    ],
    tools: ['GitLab CI/CD', 'Terraform', 'Docker', 'Kubernetes', 'Argo CD'],
  },
];

export const navLinks = [
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'System Design',
    url: '#system-design',
  },
  {
    name: 'Projects',
    url: '#projects',
  },
  {
    name: 'Skills',
    url: '#skills',
  },
  {
    name: 'Contact',
    url: '#contact',
  },
];

export const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
  },
];
