-- Run this SQL in your Supabase SQL editor to support the contact form.
create table if not exists public.contact_requests (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  company text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_requests enable row level security;

create policy "Allow anonymous inserts for contact form"
on public.contact_requests
for insert
to anon
with check (true);
