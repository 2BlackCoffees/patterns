---
version: 1.0
submitted_by: navveenb
published_date: tbd
category: ai
tags: 
 - ai
 - machine-learning
 - role:data-scientist
 - size:small
---

# Use sustainable regions for ML training 

## Description
Training an AI model has a significant carbon footprint. Depending on the model parameters and training iterations, training an AI/ML model consumes lot of of power and requires many high servers that adds to embodied emissions.


## Solution
Use a cloud region which has a lower carbon intensity value for running your ML training workloads.


## SCI Impact
`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

For the SCI equation, using a lower carbon intensity region for ML training would impact the following:
- 'E': Having a lower carbon intensity region for ML training, would reduce the carbon emissions of ML applications, decreasing the E number.

## Assumptions
The migration of workloads to other regions assumes you have taken into consideration privacy, security, or data sovereignty based on your application requirements. 

## Considerations
Consider the trade-offs between carbon footprint, cost and latency while selecting a region based on your application requirements. 

## References
- [Faster, cheaper, greener? Pick the Google Cloud region that’s right for you](https://cloud.google.com/blog/topics/sustainability/google-cloud-region-picker-helps-you-make-the-green-choice)
- [Amazon’s sustainability regions](https://sustainability.aboutamazon.com/around-the-globe?energyType=true)
- [Azure sustainability](https://azure.microsoft.com/en-us/explore/global-infrastructure/sustainability/)
- [Google Cloud sustainability regions](https://cloud.google.com/sustainability/region-carbon)