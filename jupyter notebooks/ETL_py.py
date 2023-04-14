# %%
import pandas as pd
from sqlalchemy import create_engine 

# %%
df = pd.read_csv("data/emission_db.csv")

df.head()

# %%
engine = create_engine("sqlite:///data/climate_data2.sqlite")

# %%
conn = engine.connect()

# %%
df.to_sql("emissions", conn, index = False, if_exists="replace")

# %%
climate_data = pd.read_sql("SELECT * FROM emissions", conn)

climate_data

# %%
tempdf = pd.read_csv("data/Annual_Surface_Temperature_Change_USA_cleaned.csv")

tempdf.head()

# %%
tempdf.to_sql("temps", conn, index = False, if_exists="replace")
temp_data = pd.read_sql("SELECT * FROM temps", conn)

temp_data

# %%
tempdf = pd.read_csv("data/Annual_Surface_Temperature_Change_USA_cleaned.csv")

tempdf.head()

# %%
uscityemissions_df = pd.read_csv("data/us_city_emissions_df.csv")

uscityemissions_df.head()

# %%
uscityemissions_df.to_sql("usemissions", conn, index = False, if_exists="replace")
uscityemissions_df = pd.read_sql("SELECT * FROM usemissions", conn)

uscityemissions_df

# %%


# %%


# %%


# %%


# %%
engine.dispose()


